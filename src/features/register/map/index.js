import React from 'react';
import { object, string, number, mixed, addMethod } from 'yup';
import Storage from '@aws-amplify/storage';

import {
	LandForm,
	PortionForm,
	ProductActivitiesForm,
	ContractTermsForm,
	TransferOwnershipForm,
	DocumentForm
} from '../components';
import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES,
	CONTRACT_TERMS,
	TRANSFER_OWNERSHIP,
	DOCUMENTS,
	USER,
	roles
} from '../../../shared/values';

import contracts from '../../../contracts';
import { credentials, getUserRole } from '../../../api/user';

addMethod(string, 'user', function () {
	return this.test('user', 'Address non valido per effettuare questo tipo di operazione', function (value) {
		const { path, createError } = this;

		if (window.web3.eth.defaultAccount === value) {
			return false;
		}

		return credentials() // TODO: improve
			.then((result) => {
				return getUserRole(value, result.getIdToken().getJwtToken())
					.then((result) => {
						if (result.user) {
							const user = result.user;
							return (
								parseInt(user.UserAttributes[2].Value) === roles.indexOf(USER) &&
								!Boolean(parseInt(user.UserAttributes[3].Value))
							);
						}

						return false;
					})
					.catch((error) => createError({ path, message: error.toString() }));
			})
			.catch((error) => createError({ path, message: error.toString() }));
	});
});

const forms = {
	[DOCUMENTS]: {
		component: (props) => <DocumentForm {...props} />,
		initialValues : {
			element: LAND,
			id: '',
			document: {}
		},
		validationSchema: object().shape({
			element: string().required('Selezionare l\'elemento per il quale si vuole registrare il documento'),
			id: number().required('Selezionare un terreno o una porzione a cui allegare il documento'),
			document: object().shape({
				name: string().required('Inserire un allegato'),
				file: mixed().required('Inserire un allegato'),
				base64: string().required('Inserire un allegato')
			})
		}),
		handleSubmit: ({ element, id, document: { name, file, base64 }}, handleFeedback, senderAddress) => {
			const instance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);

			instance.methods.registerDocument(id, window.web3.utils.fromAscii(name), window.web3.utils.keccak256(base64))
				.send({ from: senderAddress })
				.then((result) => {
					Storage.put(name, file)
						.then((result) => {
							handleFeedback(false);
						})
						.catch((error) => {
							handleFeedback(true);
						});
				})
				.catch((error) => {
					handleFeedback(true);
				});
		}
	},
	[LAND]: {
		component: (props) => <LandForm {...props} />,
		initialValues: {
			description: ''
		},
		validationSchema: object().shape({
			description: string().required('Il campo descrizione è obbligatorio'),
		}),
		handleSubmit: ({ description }, handleFeedback, senderAddress) => {
			const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);

			landInstance.methods.register(description)
				.send({ from: senderAddress })
				.then((result) => {
					handleFeedback(false);
				})
				.catch((error) => {
					handleFeedback(true);
				});
		}
	},
	[PORTION]: {
		component: (props) => <PortionForm {...props} />,
		initialValues: {
			land: '',
			description: ''
		},
		validationSchema: object().shape({
			land: number().required('Selezionare il terreno al quale appartiene la porzione'),
			description: string().required('Il campo descrizione è obbligatorio')
		}),
		handleSubmit: ({ land, description }, handleFeedback, senderAddress) => {
			const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);

			landInstance.methods.divide(land, description, contracts[PORTION].address)
				.send({ from: senderAddress })
				.then((result) => {
					handleFeedback(false);
				})
				.catch((error) => {
					handleFeedback(true);
				});
		}
	},
	[CONTRACT_TERMS]: {
		component: (props) => <ContractTermsForm {...props} />,
		initialValues: {
			portion: '',
			address: '',
			price: '',
			duration: '',
			periodicity: '',
			expectedProduction: '',
			expMainActivityCost: '',
			expProdActivityCost: ''
		},
		validationSchema: object().shape({
			portion: number().required('Selezionare la porzione relativa'),
			address: string()
				.required('Inserire l\'indirizzo')
				.length(42, 'L\'address è lungo esattamente 42 caratteri')
				.user(),
			price: number().required('Il costo relativo al contratto è obbligatorio'),
			duration: number()
				.min(0, 'Il dato deve essere maggiore o uguale a 0')
				.integer('Il dato deve essere un numero intero').required('Le informazioni sulla durata del contratto sono obbligatorie'),
			periodicity: string().required('Inserire la periodicità della produzione attesa'),
			expectedProduction: string().required('Le informazioni sulla produzione attesa sono obbligatorie'),
			expMainActivityCost: number().required('I costi attesi per le attività di manutenzione sono obbligatori'),
			expProdActivityCost: number().required('I costi attesi per la produzione sono obbligatori')
		}),
		handleSubmit: ({
		   portion,
		   price,
		   duration,
		   expectedProduction,
		   periodicity,
		   expMainActivityCost,
		   expProdActivityCost,
		   address
		}, handleFeedback, senderAddress) => {
			const today = new Date();
			const deadline = duration ?
				new Date(today.getFullYear() + duration, today.getMonth(), today.getDate()).getTime() : 0;

			const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
			portionInstance.methods.defineTerms(
				portion,
				price * 100,
				deadline,
				expectedProduction,
				periodicity,
				expMainActivityCost * 100,
				expProdActivityCost * 100,
				address,
				)
				.send({ from: senderAddress })
				.then((result) => {
					handleFeedback(false);
				})
				.catch((error) => {
					handleFeedback(true);
				});
		}
	},
	[TRANSFER_OWNERSHIP]: {
		component: (props) => <TransferOwnershipForm {...props} />,
		initialValues: {
			portion: '',
			address: ''
		},
		validationSchema: object().shape({
			portion: number().required('Selezionare la porzione di terra relativa'),
			address: string()
				.required('Inserire l\'indirizzo')
				.length(42, 'L\'address è lungo esattamente 42 caratteri')
				.user()
		}),
		handleSubmit: ({ portion, address }, handleFeedback, senderAddress) => {
			const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
			portionInstance.methods.sell(
				portion,
				address
			)
				.send({ from: senderAddress })
				.then((result) => {
					handleFeedback(false);
				})
				.catch((error) => {
					handleFeedback(true);
				});
		}
	},
	[PRODUCT]: {
		component: (props) => <ProductActivitiesForm {...props} />,
		initialValues: {
			portion: '',
			description: ''
		},
		validationSchema: object().shape({
			portion: number().required('Selezionare la porzione di terreno alla quale appartiene il prodotto'),
			description: string().required('Il campo descrizione è obbligatorio')
		}),
		handleSubmit: ({ portion, description }, handleFeedback, senderAddress) => {
			const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);

			portionInstance.methods.registerProduct(description, portion, contracts[PRODUCT].address)
				.send({ from: senderAddress })
				.then((result) => {
					handleFeedback(false);
				})
				.catch((error) => {
					handleFeedback(true);
			});
		}
	},
	[PROD_ACTIVITIES]: {
		component: (props) => <ProductActivitiesForm {...props} />,
		initialValues: {
			portion: '',
			description: ''
		},
		validationSchema: object().shape({
			portion: number().required('Selezionare la porzione di terreno alla quale appartiene l\'attività di produzione'),
			description: string().required('Il campo descrizione è obbligatorio')
		}),
		handleSubmit: ({ portion, description }, handleFeedback, senderAddress) => {
			const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);

			portionInstance.methods.registerProductionActivity(description, portion, contracts[PROD_ACTIVITIES].address)
				.send({ from: senderAddress })
				.then((result) => {
					handleFeedback(false);
				})
				.catch((error) => {
					handleFeedback(true);
				});
		}
	},
	[MAINTENANCE_ACTIVITIES]: {
		component: (props) => <ProductActivitiesForm {...props} />,
		initialValues: {
			portion: '',
			description: ''
		},
		validationSchema: object().shape({
			portion: number().required('Selezionare la porzione di terreno alla quale appartiene l\'attività di manutenzione'),
			description: string().required('Il campo descrizione è obbligatorio')
		}),
		handleSubmit: ({ portion, description }, handleFeedback, senderAddress) => {
			const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);

			portionInstance.methods.registerMaintenance(description, portion, contracts[MAINTENANCE_ACTIVITIES].address)
				.send({ from: senderAddress })
				.then((result) => {
					handleFeedback(false);
				})
				.catch((error) => {
					handleFeedback(true);
				});
		}
	}
}

export { forms };

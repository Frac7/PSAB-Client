import React from 'react';
import { object, string, array, number, mixed } from 'yup';

import {
	LandForm,
	PortionForm,
	ProductActivitiesForm,
	ContractTermsForm,
	TransferOwnershipForm
} from '../components';
import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES,
	CONTRACT_TERMS, TRANSFER_OWNERSHIP
} from '../../../shared/values';

import contracts from '../../../shared/contracts';

const forms = {
	[LAND]: {
		component: (props) => <LandForm {...props} />,
		initialValues: {
			description: '',
			documents: []
		},
		validationSchema: object().shape({
			description: string().required('Il campo descrizione è obbligatorio'),
			documents: array().of(object().shape({
				value: string(),
				file: mixed()
			}))
		}),
		handleSubmit: ({ description, documents }, handleFeedback, senderAddress) => {
			const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);

			landInstance.methods.register(description, documents)
				.send({ from : senderAddress })
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				})
				.catch((error) => {
					console.log(error);
					handleFeedback(true);
				});
		}
	},
	[PORTION]: {
		component: (props) => <PortionForm {...props} />,
		initialValues: {
			land: '',
			description: '',
			documents: []
		},
		validationSchema: object().shape({
			land: number().required('Selezionare il terreno al quale appartiene la porzione'),
			description: string().required('Il campo descrizione è obbligatorio'),
			documents: array().of(object().shape({
				value: string(),
				file: mixed()
			}))
		}),
		handleSubmit: ({ land, description, documents }, handleFeedback, senderAddress) => {
			const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);

			landInstance.methods.divide(land, description, documents, contracts[PORTION].address)
				.send({ from : senderAddress })
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				})
				.catch((error) => {
					console.log(error);
					handleFeedback(true);
				});
		}
	},
	[CONTRACT_TERMS]: {
		component: (props) => <ContractTermsForm {...props} />,
		initialValues: {
			portion: '',
			price: '',
			duration: '',
			periodicity: '',
			expectedProduction: '',
			expMainActivityCost: '',
			expProdActivityCost: '',
			buyer: ''
		},
		validationSchema: object().shape({
			portion: number().required('Selezionare la porzione relativa'),
			price: number().required('Il costo relativo al contratto è obbligatorio'),
			duration: string().required('Le informazioni sulla durata del contratto sono obbligatorie'),
			periodicity: string().required('Inserire la periodicità della produzione attesa'),
			expectedProduction: string().required('Le informazioni sulla produzione attesa sono obbligatorie'),
			expMainActivityCost: number().required('I costi attesi per le attività di manutenzione sono obbligatori'),
			expProdActivityCost: number().required('I costi attesi per la produzione sono obbligatori'),
			buyer: string()
				.matches(/^0x[a-fA-F0-9]{40}$/g, 'Il formato dell\'indirizzo non è valido')
				.length(42, 'L\'indirizzo è lungo esattamente 42 caratteri')
				.required('L\'indirizzo dell\'acquirente è obbligatorio')
		}),
		handleSubmit: ({ portion, price, duration, expectedProduction, periodicity, expMainActivityCost, expProdActivityCost }, handleFeedback, senderAddress) => {
			const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
			portionInstance.methods.defineTerms(
				portion,
				price,
				duration,
				expectedProduction,
				periodicity,
				expMainActivityCost,
				expProdActivityCost,
				contracts[PORTION].address)
				.send({ from : senderAddress })
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				})
				.catch((error) => {
					console.log(error);
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
				.length(42, 'L\'address è lungo esattamente 42 caratteri'),
		}),
		handleSubmit: ({ portion, address }, handleFeedback, senderAddress) => {
			const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
			portionInstance.methods.sell(
				portion,
				address,
				contracts[PORTION].address)
				.send({ from : senderAddress })
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				})
				.catch((error) => {
					console.log(error);
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
				.send({ from : senderAddress })
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				})
				.catch((error) => {
					console.log(error);
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
					console.log(result);
					handleFeedback(false);
				})
				.catch((error) => {
					console.log(error);
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

			portionInstance.methods.register(description, portion, contracts[MAINTENANCE_ACTIVITIES].address)
				.send({ from : senderAddress })
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				})
				.catch((error) => {
					console.log(error);
					handleFeedback(true);
				});
		}
	}
}

export { forms };

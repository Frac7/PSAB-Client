import React from 'react';
import { object, string, array, number, mixed } from 'yup';

import {
	LandForm,
	PortionForm,
	ProductActivitiesForm
} from '../components';
import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../../../shared/values';

import {
	Land,
	Portion,
	Product,
	Maintenance,
	ProductionActivity
} from '../../../contracts';

const contracts = {
	[LAND]: {
		ABI: Land,
		address: '0xbc35822023d94eB1A47F6EE701cf2028366F64a5'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x588Fb29dfE475aC957B90e2ee565f31498a1Fa8b'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0xbc35822023d94eB1A47F6EE701cf2028366F64a5'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x15e80c90047a6e857B33D321b0b5A826d44Eb97B'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0x341C54D1626698241354E184EE67ED44a8B1d721'
	}
};

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
		handleSubmit: ({ description, documents }, handleFeedback) => {
			const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);

			landInstance.methods.register(window.web3.utils.fromAscii(description), window.web3.utils.fromAscii(documents))
				.send({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				}).catch((error) => {
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
			price: '',
			duration: '',
			expectedProduction: '',
			expMainActivityCost: '',
			expProdActivityCost: '',
			buyer: '',
			documents: []
		},
		validationSchema: object().shape({
			land: number().required('Selezionare il terreno al quale appartiene la porzione'),
			description: string().required('Il campo descrizione è obbligatorio'),
			price: number().required('Il costo relativo al contratto è obbligatorio'),
			duration: string().required('Le informazioni sulla durata del contratto sono obbligatorie'),
			expectedProduction: string().required('Le informazioni sulla produzione attesa sono obbligatorie'),
			expMainActivityCost: number().required('I costi attesi per le attività di manutenzione sono obbligatori'),
			expProdActivityCost: number().required('I costi attesi per la produzione sono obbligatori'),
			buyer: string()
				.matches(/^0x[a-fA-F0-9]{40}$/g, 'Il formato dell\'indirizzo non è valido')
				.length(42, 'L\'indirizzo è lungo esattamente 42 caratteri')
				.required('L\'indirizzo dell\'acquirente è obbligatorio'),
			documents: array().of(object().shape({
				value: string(),
				file: mixed()
			})).min(1, 'Inserire almeno un documento')
		}),
		handleSubmit: ({ id, description, documents }, handleFeedback) => {
			const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);

			landInstance.methods.divide(id, window.web3.utils.fromAscii(description), window.web3.utils.fromAscii(documents))
				.send({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				}).catch((error) => {
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
		handleSubmit: ({ portion, description }, handleFeedback) => {
			const productInstance = new window.web3.eth.Contract(contracts[PRODUCT].ABI, contracts[PRODUCT].address);

			productInstance.methods.register(portion, window.web3.utils.fromAscii(description))
				.send({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				}).catch((error) => {
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
		handleSubmit: ({ portion, description }, handleFeedback) => {
			const prodActivitiesInstance = new window.web3.eth.Contract(contracts[PROD_ACTIVITIES].ABI, contracts[PROD_ACTIVITIES].address);

			prodActivitiesInstance.methods.register(portion, window.web3.utils.fromAscii(description))
				.send({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				}).catch((error) => {
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
		handleSubmit: ({ portion, description }, handleFeedback) => {
			const maintenanceActivityInstance = new window.web3.eth.Contract(contracts[MAINTENANCE_ACTIVITIES].ABI, contracts[MAINTENANCE_ACTIVITIES].address);

			maintenanceActivityInstance.methods.register(portion, window.web3.utils.fromAscii(description))
				.send({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
				.then((result) => {
					console.log(result);
					handleFeedback(false);
				}).catch((error) => {
				console.log(error);
				handleFeedback(true);
			});
		}
	}
}

export { forms };

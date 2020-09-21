import React from 'react';
import { object, string, array, number } from 'yup';

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

const forms = {
	[LAND]: {
		component: (props) => <LandForm {...props} />,
		initialValues: {
			description: '',
			documents: []
		},
		validationSchema: object().shape({
			description: string().required('Il campo descrizione è obbligatorio'),
			documents: array().of(string()).min(1, 'Inserire almeno un documento')
		})
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
			documents: array().of(string()).min(1, 'Inserire almeno un documento')
		})
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
		})
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
		})
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
		})
	}
}

export { forms };

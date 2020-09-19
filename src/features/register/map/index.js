import React from 'react';
import { object, string, array, mixed, number } from 'yup';

import {
	LandForm,
	MaintenanceForm,
	PortionForm,
	ProductForm,
	ProductionForm
} from '../components';
import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../values';

const forms = {
	[LAND]: {
		component: (props) => <LandForm {...props} />,
		initialValues: {
			description: '',
			documents: []
		},
		validationSchema: object().shape({
			description: string().required('Il campo descrizione è obbligatorio'),
			// documents: array().of(mixed()).min(1, 'Inserire almeno un documento')
			// TODO: create test function for this kind of data
		})
	},
	[PORTION]: {
		component: (props) => <PortionForm {...props} />,
		initialValues: {
			land: null,
			description: '',
			price: null,
			duration: '',
			expectedProduction: '',
			expMainActivityCost: null,
			expProdActivityCost: null,
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
			buyer: string().length(42, 'L\'indirizzo è lungo esattamente 42 caratteri').required('L\'indirizzo dell\'acquirente è obbligatorio') // TODO: create test function for eth address
		})
	},
	[PRODUCT]: {
		component: (props) => <ProductForm {...props} />,
		initialValues: {},
		validationSchema: null
	},
	[PROD_ACTIVITIES]: {
		component: (props) => <ProductionForm {...props} />,
		initialValues: {},
		validationSchema: null
	},
	[MAINTENANCE_ACTIVITIES]: {
		component: (props) => <MaintenanceForm {...props} />,
		initialValues: {},
		validationSchema: null
	}
}

export { forms };

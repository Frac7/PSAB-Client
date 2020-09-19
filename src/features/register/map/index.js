import React from 'react';
import { object, string, array, mixed } from 'yup';

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
		})
	},
	[PORTION]: {
		component: (props) => <PortionForm {...props} />,
		initialValues: {},
		validationSchema: null
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

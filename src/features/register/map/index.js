import React from 'react';

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
	[LAND]: <LandForm />,
	[PORTION]: <PortionForm />,
	[PRODUCT]: <ProductForm />,
	[PROD_ACTIVITIES]: <ProductionForm />,
	[MAINTENANCE_ACTIVITIES]: <MaintenanceForm />
}

export { forms };

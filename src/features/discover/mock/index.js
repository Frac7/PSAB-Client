import React from 'react';

import {
	LAND,
	PORTION,
	PROD_ACTIVITIES,
	PRODUCT,
	MAINTENANCE_ACTIVITIES
} from '../../../shared/values';

const fakeLand = {
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque congue ex rutrum feugiat. Mauris lacinia turpis elit, non iaculis felis iaculis nec.',
	documents: [
		'Documento #1',
		'Documento #2'
	]
};

const fakePortion = {
	id: -1,
	land: -1,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque congue ex rutrum feugiat. Mauris lacinia turpis elit, non iaculis felis iaculis nec.',
	documents: [
		'Documento #1',
		'Documento #2'
	],
	price: 1000,
	duration: '1 anno',
	expectedProduction: 'Olive, olio',
	expMainActivityCost: 2000,
	expProdActivityCost: 3000
};

const fakeProdActivity = {
	portion: -1,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque congue ex rutrum feugiat. Mauris lacinia turpis elit, non iaculis felis iaculis nec.'
};

const fakeProduct = {
	id: -1,
	portion: -1,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque congue ex rutrum feugiat. Mauris lacinia turpis elit, non iaculis felis iaculis nec.'
};

const fakeMainActivity = {
	portion: -1,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque congue ex rutrum feugiat. Mauris lacinia turpis elit, non iaculis felis iaculis nec.'
};

const mock = {
	[LAND]: [fakeLand, fakeLand],
	[PORTION]: [fakePortion, fakePortion],
	[PROD_ACTIVITIES]: [fakeProdActivity, fakeProdActivity],
	[PRODUCT]: [fakeProduct, fakeProduct],
	[MAINTENANCE_ACTIVITIES]: [fakeMainActivity, fakeMainActivity]
}

 export { mock };

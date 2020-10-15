import Land from './Land.json';
import Portion from './Portion.json';
import Product from './Product.json';
import Maintenance from './Maintenance.json';
import ProductionActivity from './ProductionActivity.json';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../shared/values';

const contracts = {
	[LAND]: {
		ABI: Land.abi,
		address: '0x5c6bafE9a2cA993568D16EA2B86902AA18e2547d'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0x4d03a40dd56a11C7455B9E6376fCA67254bEcf20'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0xD00DD60f0A7851073ce5a33525F1828863Dc96E6'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0x7be05F531Fb6bEB5170a6f05BD8D2D105ae0FCDb'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0xC15f75444a8BCa2F211ea82402E86cc3D2A17b58'
	}
};

export default contracts;

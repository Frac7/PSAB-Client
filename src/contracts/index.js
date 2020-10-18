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
		address: '0xC02f04F8Fb21D8dD61248aD0f2bf4d69534F03ea'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0xc021380b552Ae43883E74c6c99824145A1456e95'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0x0E8ddcC72053F225B1Da63284951359515C91638'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0x27D99F499085B5413f6F6553A6Fd821d1452B2E9'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0x2242bC8fFbBdf2A7A698D5d46112e08A7FD146b1'
	}
};

export default contracts;

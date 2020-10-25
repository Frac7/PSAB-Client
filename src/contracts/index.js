import { abi as Land } from './Land.json';
import { abi as Portion } from './Portion.json';
import { abi as Product } from './Product.json';
import { abi as Maintenance } from './Maintenance.json';
import { abi as ProductionActivity } from './ProductionActivity.json';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../shared/values';

const contracts = {
	[LAND]: {
		ABI: Land,
		address: '0xc021380b552Ae43883E74c6c99824145A1456e95'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x8038Cf6a8bd39D01713184b573872a038a05c768'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0x0E8ddcC72053F225B1Da63284951359515C91638'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x27D99F499085B5413f6F6553A6Fd821d1452B2E9'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0x2242bC8fFbBdf2A7A698D5d46112e08A7FD146b1'
	}
};

export default contracts;

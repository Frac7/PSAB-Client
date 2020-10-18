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
		address: '0x791907B14FF1f93D5E44a08e11a348DaF377aA6d'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0xF8596eA754464f085194DEe35ca4312BB21E4559'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0x03b54D4d8655642FDE5Dd34b428f722a74884233'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0xcd04D52f4a4D3D549A0DC0A450698E0Df6E845Fe'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0xEDe9d087cA0870fbaAeb84Bc000Ffe7E24598E4c'
	}
};

export default contracts;

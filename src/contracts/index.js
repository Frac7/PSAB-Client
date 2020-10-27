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
		address: '0x1F1dD176d02f3eC0a5A444ae2d808C5c4969D5c2'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x0f7F02290EE5Dc190C53Fb69e99Dd2E051fcB492'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0xd597f7187ED5Cef012B001288ce44640812f8a6D'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x98C2b634A061F09616ED69051cFCf6d4459Cadf5'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0x3C88235AEad3D15fAcaBb0Fd630fb530396bF97b'
	}
};

export default contracts;

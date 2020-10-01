import {
	Land,
	Portion,
	Product,
	Maintenance,
	ProductionActivity
} from '../../contracts';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../values';

const contracts = {
	[LAND]: {
		ABI: Land.abi,
		address: '0x6C3199793C8F2457D29aAF415b42544A34644357'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0xe3e517713D133a6e59C6f513485Ba6d4118FF5Eb'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0x472C9d9B8E023E237c7b3faB8ac909d97D29a6FD'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0xDd9309e21eAa8c1D2dF9D5AE14af587B0902fc5c'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0x35006B692c4CAD27457Fe49ae8A004A35d290a34'
	}
};

export default contracts;

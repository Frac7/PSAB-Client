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
		ABI: Land,
		address: '0x43a4D1d26c38536e9c384b39CB035a4a8022B8Da'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0xdF47507D62c029B8e6e6764A1fC810c48f5cB663'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0x560ce629354916BCEea043475334C0a360223f60'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0xE8739c27B010454ea89C1fB3B4023a6d6f4742d7'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0xB54834D2bf7797396369D08f9328e54B907933cA'
	}
};

export default contracts;

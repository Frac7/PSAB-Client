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
		address: '0x16750aB99f0a4Da1eC8ed6d4845A2d29B1A13AF6'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x588353d2b1EF936D58d542e08DF08D35a7ca86E6'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0xE77E9A4407ffF57c77213580D96e4dDddAe3e084'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x34f651e8bbCA0C913F5738bdCb876E07F49D82fe'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0x4de829fAC1AD09Db7d74Cd54d5FdAE375D97Bee7'
	}
};

export default contracts;

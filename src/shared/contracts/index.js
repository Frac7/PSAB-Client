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
		address: '0xfB35b632Edb76c3c270cA2Aea536C89DC75DC4f2'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0xd4eb9ae31FB56403Af8B8cd4cb3Ee9841485829A'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0xf4a6b9921F202EFb2B65B0CdF44281AFa0Ab59a4'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x971DF24806701D154794Dc9b923536112c2596E1'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0x6A775CfE4C2cFeE89705fB123c0e80B19978cA8D'
	}
};

export default contracts;

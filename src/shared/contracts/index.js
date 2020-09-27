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
		address: '0xd7BF43f79f8228aB7CE7548610e6089492737c00'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0xA4D19aAB10f75123AD11a31F3DDa2A26b560fF5b'
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

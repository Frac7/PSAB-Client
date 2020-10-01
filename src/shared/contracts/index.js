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
		address: '0x45422801874Fa8875bcBa7fE184C132768A19322'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0x2f4eD1Fca0ae50a411Eab90B60F5175A9DbD38d1'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0x3Cb3F5F567c7100Ba33559624537fd1285A51069'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0x0F9a329341CD429f49fd3125e3cde47f3Cd8730F'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0x9701A63A6f47Bb160dD6DBaCf676BF5b04782Bb1'
	}
};

export default contracts;

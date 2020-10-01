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
		address: '0x22473bbA0ed6DAd98e80F2ffD17bc9ed6005dF38'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0x0F9a329341CD429f49fd3125e3cde47f3Cd8730F'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0x2e8EaC0ED127Da0f648B292D114180AE3a4e6245'
	}
};

export default contracts;

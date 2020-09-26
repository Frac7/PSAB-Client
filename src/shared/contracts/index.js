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
		address: '0x883eeD49bd9297528eCc9C2Bfc5F66071d23bEe8'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x5C50496692E3c560A448c9E56668992073379a07'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0xeA94A88Ef01EE34d68A235b1375587c02024244C'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x680435D9EE947B3aD1f478d9522f55Ab318106b9'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0x680435D9EE947B3aD1f478d9522f55Ab318106b9'
	}
};

export default contracts;

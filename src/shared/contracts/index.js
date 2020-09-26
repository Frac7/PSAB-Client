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
		address: '0x794c367f539c9f8Ae12ba536EfdEE3c240446477'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x95AC9Be4133a79C55F36Dfbd925A8f50e75d5260'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0x9a3db1128c30a4139db28d88A7516f9e74D9CD26'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0xe200B29c20A48032cBb0B57a7E3D780Cceb6b6f0'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0xA8632b900ffEfbF7a2c8C3fe6e60576B18382862'
	}
};

export default contracts;

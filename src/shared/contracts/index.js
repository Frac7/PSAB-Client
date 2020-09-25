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
		address: '0xbc35822023d94eB1A47F6EE701cf2028366F64a5'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x588Fb29dfE475aC957B90e2ee565f31498a1Fa8b'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0xbc35822023d94eB1A47F6EE701cf2028366F64a5'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x15e80c90047a6e857B33D321b0b5A826d44Eb97B'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0x341C54D1626698241354E184EE67ED44a8B1d721'
	}
};

export default contracts;

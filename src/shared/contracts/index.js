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
		address: '0xa79f4F2617abCCb4dbEAbe99B61401Fa49f0A8Fd'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0x353A1A99BE50615dd1015caE585df143c0857FD0'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0x2aE3f4CF8b0d0e65c7c4356Bbf8fafe68951a421'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0x25FCaaE613A07CaA9a023644bf26458AC84D34A5'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0xb53765118b3A3763cc6B77cB22f870b4F8e03D18'
	}
};

export default contracts;

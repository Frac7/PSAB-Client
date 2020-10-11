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
		address: '0xC02f04F8Fb21D8dD61248aD0f2bf4d69534F03ea'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0xc021380b552Ae43883E74c6c99824145A1456e95'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0x2242bC8fFbBdf2A7A698D5d46112e08A7FD146b1'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0x43b19A25b355364f18C0c98B2Be90A840391C679'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0x0E8ddcC72053F225B1Da63284951359515C91638'
	}
};

export default contracts;

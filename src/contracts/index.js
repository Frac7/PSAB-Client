import Land from './Land.json';
import Portion from './Portion.json';
import Product from './Product.json';
import Maintenance from './Maintenance.json';
import ProductionActivity from './ProductionActivity.json';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../shared/values';

const contracts = {
	[LAND]: {
		ABI: Land.abi,
		address: '0x11f9Bb2A3295Ed393D9D1Fc7a233f753Fee5Bfb4'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0x7d88206781715A0C70cBb081Db0d3A1CC57a9f19'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0x7A84dB3b5C017c5C151fCA97525F1843B4A6FEE6'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0xFe86774d3C689A9896cB361Ec78CFBCAc29db5C9'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0xB81C9611ECe496C195a031180D44d74CEE7329e5'
	}
};

export default contracts;

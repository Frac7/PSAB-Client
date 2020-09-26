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
		address: '0xC6595b7EDBc26fAEC6B8557Fc3bbEc07795fFad7'
	},
	[PORTION]: {
		ABI: Portion,
		address: '0xfA0C6D72F5219411C352F38cDF835e26777F9eB3'
	},
	[PRODUCT]: {
		ABI: Product,
		address: '0xC32676c4E4Ab7E8AB32975562eC5C93FdEFB911A'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance,
		address: '0xF29fDC9C0102CD1658Bd5c8259378fea9447CD17'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity,
		address: '0xf97Ec75A266e9A0b68ec57D66641Ed8afF6da0D5'
	}
};

export default contracts;

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
		address: '0x60b4DA1eB65a60DBB1d6c216c8A18658B254DCc8'
	},
	[PORTION]: {
		ABI: Portion.abi,
		address: '0x639b8FFB955A6337AeFdB2F5e8C0d345D9311382'
	},
	[PRODUCT]: {
		ABI: Product.abi,
		address: '0x5ad2112F91Fac0fDA52bb27a9dc38363cf297dC3'
	},
	[MAINTENANCE_ACTIVITIES]: {
		ABI: Maintenance.abi,
		address: '0x9647c4a7cd0010F58D89e06fc5912fEb896f933f'
	},
	[PROD_ACTIVITIES]: {
		ABI: ProductionActivity.abi,
		address: '0x3eEF3962da74B8fc0B8Fd445615C42389d73D177'
	}
};

export default contracts;

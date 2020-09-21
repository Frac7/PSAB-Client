import React from 'react';
import {
	DiscoverLand,
	DiscoverPortion,
	DiscoverProduct,
	DiscoverActivity
} from '../components';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../../../shared/values';

const elementWrappers = {
	[LAND]: (props) => <DiscoverLand {...props} />,
	[PORTION]: (props) => <DiscoverPortion {...props} />,
	[PRODUCT]: (props) => <DiscoverProduct {...props} />,
	[PROD_ACTIVITIES]: (props) => <DiscoverActivity {...props} />,
	[MAINTENANCE_ACTIVITIES]: (props) => <DiscoverActivity {...props} />,
}

export { elementWrappers };

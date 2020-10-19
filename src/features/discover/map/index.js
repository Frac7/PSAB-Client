import React from 'react';
import {
	DiscoverLand,
	DiscoverPortion,
	DiscoverActivityProduct,
} from '../../../shared/views';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../../../shared/values';
import contracts from '../../../contracts';

const elementWrappers = {
	[LAND]: (props) => <DiscoverLand {...props} />,
	[PORTION]: (props) => <DiscoverPortion {...props} />,
	[PRODUCT]: (props) => <DiscoverActivityProduct {...props} element={PRODUCT}/>,
	[PROD_ACTIVITIES]: (props) => <DiscoverActivityProduct {...props} element={PROD_ACTIVITIES} />,
	[MAINTENANCE_ACTIVITIES]: (props) => <DiscoverActivityProduct {...props} element={MAINTENANCE_ACTIVITIES} />
}

const handleFetching = (userAddress, setElements, setFetchErrors, setIsLoading, element) => {
	setIsLoading(true);

	const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
	contractInstance.methods.getTotal()
		.call({ from : userAddress })
		.then((total) => {
			total = parseInt(total);
			if (!total) {
				setElements([]);
				setFetchErrors(false);
				setIsLoading(false);
				return;
			}

			for (let i = 0; i < total; i++) {
				contractInstance.methods.getById(i)
					.call({ from: userAddress })
					.then((result) => {
						setElements((elements) => ([
							...elements, {
								...result,
								id: i
							}
						]));

						if (i === total - 1) {
							setFetchErrors(false);
							setIsLoading(false);
						}
					})
					.catch((error) => {
						setFetchErrors(true);
						setIsLoading(false);
					});
			}

		})
		.catch((error) => {
			setFetchErrors(true);
			setIsLoading(false);
		});
};

export { elementWrappers, handleFetching };

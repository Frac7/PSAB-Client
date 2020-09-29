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
import contracts from '../../../shared/contracts';

const elementWrappers = {
	[LAND]: (props) => <DiscoverLand {...props} />,
	[PORTION]: (props) => <DiscoverPortion {...props} />,
	[PRODUCT]: (props) => <DiscoverActivityProduct {...props} element={PRODUCT}/>,
	[PROD_ACTIVITIES]: (props) => <DiscoverActivityProduct {...props} element={PROD_ACTIVITIES} />,
	[MAINTENANCE_ACTIVITIES]: (props) => <DiscoverActivityProduct {...props} element={MAINTENANCE_ACTIVITIES} />
}

const handleFetching = (userAddress, setElements, setFetchErrors, setIsLoading, element) => {
	const elements = [];

	const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
	contractInstance.methods.getTotal()
		// .call({ from : userAddress })
		.call({ from : process.env.REACT_APP_USER_ADDRESS })
		.then((total) => {
			total = parseInt(total);
			if (!total) {
				setElements(elements);
				setFetchErrors(false);
				setIsLoading(false);
				return;
			}

			for (let i = 0; i < total; i++) {
				contractInstance.methods.getById(i)
					// .call({ from: userAddress })
					.call({ from: process.env.REACT_APP_USER_ADDRESS })
					.then((result) => {
						elements.push({
							...result,
							id: i
						});

						if (i === total - 1) {
							setElements(elements);
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

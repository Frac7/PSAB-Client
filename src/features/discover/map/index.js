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

const handleFetching = {
	[LAND]: (userAddress, setElements, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);
		contractInstance.methods.getTotalLands()
			.call({ from : userAddress })
			.then((result) => {
				console.log(result);
				result = parseInt(result);
				if (!result) {
					setElements(elements);
					setFetchErrors(false);
					setIsLoading(false);
					return;
				}

				for (let i = 0; i <= result; i++) {
					contractInstance.methods.getById(i)
						.call({ from : userAddress })
						.then((land) => {
							console.log(land);
							elements.push(land);

							if (i === result) {
								setElements(elements);
								setFetchErrors(false);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				}

			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	},
	[PORTION]: (userAddress, setElements, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
		contractInstance.methods.getTotalPortions()
			.call({ from : userAddress })
			.then((result) => {
				console.log(result);
				result = parseInt(result);
				if (!result) {
					setElements(elements);
					setFetchErrors(false);
					setIsLoading(false);
					return;
				}

				for (let i = 0; i <= result; i++) {
					contractInstance.methods.getById(i)
						.call({ from : userAddress })
						.then((land) => {
							console.log(land);
							elements.push(land);

							if (i === result) {
								setElements(elements);
								setFetchErrors(false);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				}

			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	},
	[PRODUCT]: (userAddress, setElements, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[PRODUCT].ABI, contracts[PRODUCT].address);
		contractInstance.methods.getTotalProducts()
			.call({ from : userAddress })
			.then((result) => {
				console.log(result);
				result = parseInt(result);
				if (!result) {
					setElements(elements);
					setFetchErrors(false);
					setIsLoading(false);
					return;
				}

				for (let i = 0; i <= result; i++) {
					contractInstance.methods.getById(i)
						.call({ from : userAddress })
						.then((land) => {
							console.log(land);
							elements.push(land);

							if (i === result) {
								setElements(elements);
								setFetchErrors(false);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				}

			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	},
	[PROD_ACTIVITIES]: (userAddress, setElements, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[PROD_ACTIVITIES].ABI, contracts[PROD_ACTIVITIES].address);
		contractInstance.methods.getTotalProdActivities()
			.call({ from : userAddress })
			.then((result) => {
				console.log(result);
				result = parseInt(result);
				if (!result) {
					setElements(elements);
					setFetchErrors(false);
					setIsLoading(false);
					return;
				}

				for (let i = 0; i <= result; i++) {
					contractInstance.methods.getById(i)
						.call({ from : userAddress })
						.then((land) => {
							console.log(land);
							elements.push(land);

							if (i === result) {
								setElements(elements);
								setFetchErrors(false);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				}

			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	},
	[MAINTENANCE_ACTIVITIES]: (userAddress, setElements, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[MAINTENANCE_ACTIVITIES].ABI, contracts[MAINTENANCE_ACTIVITIES].address);
		contractInstance.methods.getTotalMaintenances()
			.call({ from : userAddress })
			.then((result) => {
				console.log(result);
				result = parseInt(result);
				if (!result) {
					setElements(elements);
					setFetchErrors(false);
					setIsLoading(false);
					return;
				}

				for (let i = 0; i <= result; i++) {
					contractInstance.methods.getById(i)
						.call({ from : userAddress })
						.then((land) => {
							console.log(land);
							elements.push(land);

							if (i === result) {
								setElements(elements);
								setFetchErrors(false);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				}

			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	}
};

export { elementWrappers, handleFetching };

import { MAINTENANCE_ACTIVITIES, PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';
import contracts from '../../../shared/contracts';

const handleOperatorFetch = {
	[PRODUCT]: (userAddress, setElements, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[PRODUCT].ABI, contracts[PRODUCT].address);
		contractInstance.methods.getByOperator(userAddress)
			.call({ from : userAddress })
			.then((products) => {
				console.log(products);
				if (!products.productsRegistered.length) {
					setElements(elements);
					setIsLoading(false);
					return;
				}

				products.productsRegistered.forEach((id, index) => {
					contractInstance.methods.getById(id)
						.call({ from: userAddress })
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (index === products.productsRegistered.length - 1) {
								setElements(elements);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				});
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
		contractInstance.methods.getByOperator(userAddress)
			.call({from: userAddress})
			.then((activities) => {
				console.log(activities);
				if (!activities.activitiesRegistered.length) {
					setElements((el) => [...el, ...elements]);
					setIsLoading(false);
					return;
				}

				activities.activitiesRegistered.forEach((id, index) => {
					contractInstance.methods.getById(id)
						.call({from: userAddress})
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (index === activities.activitiesRegistered.length - 1) {
								setElements((el) => [...el, ...elements]);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				});
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
		contractInstance.methods.getByOperator(userAddress)
			.call({from: userAddress})
			.then((maintenances) => {
				console.log(maintenances);
				if (!maintenances.maintenancesRegistered.length) {
					setElements((el) => [...el, ...elements]);
					setIsLoading(false);
					return;
				}

				maintenances.maintenancesRegistered.forEach((id, index) => {
					contractInstance.methods.getById(id)
						.call({from: userAddress})
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (index === maintenances.maintenancesRegistered.length - 1) {
								setElements((el) => [...el, ...elements]);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				});
			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	}
};

const handleCertifierFetch = (contract) => {

};

export {
	handleCertifierFetch,
	handleOperatorFetch
}

import contracts from '../contracts';
import { LAND, PORTION } from '../values';

const fetchLandsByOwner = (userAddress, setElements, setIsLoading, setFetchErrors) => {
	const elements = [];

	const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);
	landInstance.methods.getByOwner(userAddress)
		.call({ from : userAddress })
		.then((lands) => {
			console.log(lands);
			if (!lands.length) {
				setElements(elements);
				setIsLoading(false);
				return;
			}

			lands.forEach((id, index) => {
				landInstance.methods.getById(id)
					.call({ from: userAddress })
					.then((result) => {
						console.log(result);
						elements.push({
							...result,
							id
						});

						if (index === lands.length) {
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
};

const fetchPortionsByOwner = (userAddress, setElements, setIsLoading, setFetchErrors) => {
	const elements = [];

	const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
	portionInstance.methods.getByOwner(userAddress)
		.call({ from : userAddress })
		.then((result) => {
			console.log(result);
			if (result.portionsOwned.length === 0) {
				setElements([]);
				setIsLoading(false);
				return;
			}

			result.portionsOwned.forEach((id, index) => {
				portionInstance.methods.getById(id)
					.call({ from : userAddress })
					.then((portion) => {
						elements.push(portion);
						if (index === result.portionsOwned.length) {
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
			setIsLoading(false);
			setFetchErrors(true);
		});
}

export {
	fetchLandsByOwner,
	fetchPortionsByOwner
}

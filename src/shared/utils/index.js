import contracts from '../../contracts';
import { LAND, PORTION } from '../values';

const fetchLandsByOwner = (userAddress, setElements, setIsLoading, setFetchErrors) => {
	setIsLoading(true);

	const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);
	landInstance.methods.getByOwner(userAddress)
		.call({ from: userAddress })
		.then((lands) => {
			if (!lands.length) {
				setElements([]);
				setIsLoading(false);
				return;
			}

			lands.forEach((id, index) => {
				landInstance.methods.getById(id)
					.call({ from: userAddress })
					.then((result) => {
						setElements((elements) => ([
							...elements, {
								...result,
								id
							}]));

						if (index === lands.length - 1) {
							setIsLoading(false);
						}
					})
					.catch((error) => {
						setFetchErrors(true);
						setIsLoading(false);
					});
			});
		})
		.catch((error) => {
			setFetchErrors(true);
			setIsLoading(false);
		});
};

const fetchPortionsByOwner = (userAddress, setElements, setIsLoading, setFetchErrors) => {
	setIsLoading(true);

	const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
	portionInstance.methods.getByOwner(userAddress)
		.call({ from: userAddress })
		.then((result) => {
			if (!result.length) {
				setElements([]);
				setIsLoading(false);
				return;
			}

			result.forEach((id, index) => {
				portionInstance.methods.getById(id)
					.call({ from: userAddress })
					.then((portion) => {
						setElements((elements) => ([
							...elements, {
								...portion[0],
								id
							}]));

						if (index === result.length - 1) {
							setIsLoading(false);
						}
					})
					.catch((error) => {
						setFetchErrors(true);
						setIsLoading(false);
					});
			});
		})
		.catch((error) => {
			setIsLoading(false);
			setFetchErrors(true);
		});
}

const fetchPortionsByBuyer = (userAddress, setElements, setIsLoading, setFetchErrors) => {
	setIsLoading(true);

	const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
	portionInstance.methods.getByBuyer(userAddress)
		.call({ from: userAddress })
		.then((result) => {
			if (!result.length) {
				setElements([]);
				setIsLoading(false);
				return;
			}

			result.forEach((id, index) => {
				portionInstance.methods.getById(id)
					.call({ from: userAddress })
					.then((portion) => {
						if (portion[1].buyer === userAddress) {
							setElements((elements) => ([
								...elements, {
									...portion[0],
									id
								}]));

							if (index === result.length - 1) {
								setIsLoading(false);
							}
						}
					})
					.catch((error) => {
						setFetchErrors(true);
						setIsLoading(false);
					});
			});
		})
		.catch((error) => {
			setIsLoading(false);
			setFetchErrors(true);
		});
}

export {
	fetchLandsByOwner,
	fetchPortionsByOwner,
	fetchPortionsByBuyer
}

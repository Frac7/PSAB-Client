import contracts from '../../../shared/contracts';

const handleFetch = (userAddress, setElements, setFetchErrors, setIsLoading, element, subject) => {
	const elements = [];

	const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
	contractInstance.methods[`getBy${subject}`](userAddress)
		.call({ from : userAddress })
		.then((items) => {
			console.log(items);
			if (!items.length) {
				setElements(elements);
				setIsLoading(false);
				return;
			}

			items.forEach((id, index) => {
				contractInstance.methods.getById(id)
					.call({ from: userAddress })
					.then((result) => {
						console.log(result);
						elements.push({
							...result,
							id
						});

						if (index === items - 1) {
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

export { handleFetch };

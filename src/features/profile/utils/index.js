import contracts from '../../../shared/contracts';

const handleFetch = (userAddress, setElements, setFetchErrors, setIsLoading, element, subject) => {
	setIsLoading(true);
	const elements = [];

	const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
	// contractInstance.methods[`getBy${subject}`](userAddress)
	contractInstance.methods[`getBy${subject}`](process.env.REACT_APP_USER_ADDRESS)
		// .call({ from: userAddress })
		.call({ from: process.env.REACT_APP_USER_ADDRESS })
		.then((items) => {
			if (!items.length) {
				setElements(elements);
				setIsLoading(false);
				return;
			}

			items.forEach((id, index) => {
				contractInstance.methods.getById(id)
					// .call({ from: userAddress })
					.call({ from: process.env.REACT_APP_USER_ADDRESS })
					.then((result) => {
						elements.push({
							...result,
							id
						});

						if (index === items.length - 1) {
							setElements(elements);
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
			console.log(error);
			setFetchErrors(true);
			setIsLoading(false);
		});
};

export { handleFetch };

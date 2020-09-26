import { number, string, object } from 'yup';

import contracts from '../../../shared/contracts';

import { PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';

const initialValues = {
	object: '',
	description: ''
};

const validationSchema = object().shape({
	object: number().required('Specificare l\'oggetto della certificazione'),
	description: string().required('La descrizione della certificazione è obbligatoria')
});

const handleSubmit = ({ object, description }, handleFeedback, subject, senderAddress) => {
	const contractInstance = new window.web3.eth.Contract(contracts[subject].ABI, contracts[subject].address);

	contractInstance.methods.certify(object, window.web3.utils.fromAscii(description))
		.send({ from : senderAddress })
		.then((result) => {
			console.log(result);
			handleFeedback(false);
		})
		.catch((error) => {
			console.log(error);
			handleFeedback(true);
		});
};

const handleFetching = {
	[PRODUCT]: (userAddress, setElements, fetchErrors, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[PRODUCT].ABI, contracts[PRODUCT].address);
		contractInstance.methods.getTotalProducts()
			.call({ from: userAddress })
			.then((total) => {
				total = parseInt(total);
				if (!total) {
					setElements(elements);
					setIsLoading(false);
					return;
				}

				for (let i = 0; i < total; i++) {
					if (!fetchErrors) {
						contractInstance.methods.getById(i)
							.call({ from: userAddress })
							.then((result) => {
								elements.push(result);

								if (i === total - 1) {
									setElements(elements);
									setIsLoading(false);
								}
							})
							.catch((error) => {
								console.log(error);
								setIsLoading(false);
								setFetchErrors(true);
							});
					}
				}
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
				setFetchErrors(true);
			});
	},
	[PROD_ACTIVITIES]: (userAddress, setElements, fetchErrors, setFetchErrors, setIsLoading) => {
		const elements = [];

		const contractInstance = new window.web3.eth.Contract(contracts[PROD_ACTIVITIES].ABI, contracts[PROD_ACTIVITIES].address);
		contractInstance.methods.getTotalProdActivities()
			.call({ from: userAddress })
			.then((total) => {
				total = parseInt(total);
				if (!total) {
					setElements(elements);
					setIsLoading(false);
					return;
				}

				for (let i = 0; i < total; i++) {
					if (!fetchErrors) {
						contractInstance.methods.getById(i)
							.call({ from: userAddress })
							.then((result) => {
								elements.push(result);

								if (i === total - 1) {
									setElements(elements);
									setIsLoading(false);
								}
							})
							.catch((error) => {
								console.log(error);
								setFetchErrors(true);
								setIsLoading(false);
							});
					}
				}
			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	}
}

export {
	initialValues,
	validationSchema,
	handleSubmit,
	handleFetching
}

import { number, string, object } from 'yup';

import contracts from '../../../shared/contracts';

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

	contractInstance.methods.certify(object, description)
		.send({ from: senderAddress })
		.then((result) => {
			console.log(result);
			handleFeedback(false);
		})
		.catch((error) => {
			console.log(error);
			handleFeedback(true);
		});
};

const handleFetching = (userAddress, setElements, fetchErrors, setFetchErrors, setIsLoading, element) => {
	const elements = [];

	const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
	contractInstance.methods.getTotal()
		.call({ from: userAddress })
		.then((total) => {
			total = parseInt(total);
			if (!total) {
				setElements(elements);
				setIsLoading(false);
				return;
			}

			for (let i = 0; i <= total; i++) {
				if (!fetchErrors) {
					contractInstance.methods.getById(i)
						.call({ from: userAddress })
						.then((result) => {
							elements.push({
								...result,
								id: i
							});

							if (i === total) {
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
}

export {
	initialValues,
	validationSchema,
	handleSubmit,
	handleFetching
}

import { number, string, object } from 'yup';

import contracts from '../../../contracts';
import { PRODUCT } from '../../../shared/values';

const initialValues = {
	object: '',
	description: ''
};

const validationSchema = object().shape({
	object: number().required('Specificare l\'oggetto della certificazione'),
	description: string().required('La descrizione della certificazione è obbligatoria')
});

const handleSubmit = ({ object, description }, handleFeedback, subject, senderAddress, currentForm) => {
	const contractInstance = new window.web3.eth.Contract(contracts[subject].ABI, contracts[subject].address);

	const element = currentForm === PRODUCT ? 'Product' : 'Production';

	contractInstance.methods[`certify${element}`](object, description)
		.send({ from: senderAddress })
		.then((result) => {
			handleFeedback(false);
		})
		.catch((error) => {
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

			for (let i = 0; i < total; i++) {
				if (!fetchErrors) {
					contractInstance.methods.getById(i)
						.call({ from: userAddress })
						.then((result) => {
							elements.push({
								...result,
								id: i
							});

							if (i === total - 1) {
								setElements(elements);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							setIsLoading(false);
							setFetchErrors(true);
						});
				}
			}
		})
		.catch((error) => {
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

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

const handleSubmit = ({ object, description }, handleFeedback, subject) => {
	const contractInstance = new window.web3.eth.Contract(contracts[subject].ABI, contracts[subject].address);

	contractInstance.methods.certify(object, window.web3.utils.fromAscii(description))
		.send({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
		.then((result) => {
			console.log(result);
			handleFeedback(false);
		}).catch((error) => {
		console.log(error);
		handleFeedback(true);
	});
}

export {
	initialValues,
	validationSchema,
	handleSubmit
}

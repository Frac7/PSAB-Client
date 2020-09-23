import { object, string, ref, number } from 'yup';

const initialValues = {
	email: '',
	password: '',
	name: '',
	address: '',
	confirmPassword: '',
	role: 0
};
const validationSchema = object().shape({
	email: string().email('E-mail non valida').required('Inserire l\'e-mail'),
	password: string().required('Inserire la password').min(8, 'La password deve essere lunga almeno 8 caratteri'),
	confirmPassword: string().required('Inserire la conferma per la password').oneOf([ref('password'), null], 'Le due password non coincidono'),
	name: string().required('Inserire il nome'),
	address: string()
		.required('Inserire l\'indirizzo')
		.length(42, 'L\'address è lungo esattamente 42 caratteri'),
	role: number().required('Inserire il ruolo del nuovo utente')
});

export { initialValues, validationSchema };

import { object, string, ref } from 'yup';

const initialValues = {
	email: '',
	password: '',
	name: '',
	address: '',
	confirmPassword: ''
};
const validationSchema = object().shape(({
	email: string().email('E-mail non valida').required('Inserire l\'e-mail'),
	password: string().required('Inserire la password').test('len', 'La password deve essere lunga almeno 8 caratteri', value => value.length > 7),
	confirmPassword: string().required('Inserire la conferma per la password').oneOf([ref('password'), null], 'Le due password non coincidono'),
	name: string().required('Inserire il nome'),
	address: string()
		.required('Inserire l\'indirizzo')
		.test('len', 'L\'address è lungo esattamente 42 caratteri', value => value.length === 42),
}));

export { initialValues, validationSchema };

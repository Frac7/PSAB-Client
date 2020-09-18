import { object, string } from 'yup';

const initialValues = {
    email: '',
    password: ''
};
const validationSchema = object().shape(({
    email: string().email('E-mail non valida').required('Inserire l\'e-mail'),
    password: string().required('Inserire la password')
}));

export { initialValues, validationSchema };

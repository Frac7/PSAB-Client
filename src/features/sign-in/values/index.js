import { object, string } from 'yup';

const initialValues = {
    address: '',
    password: ''
};
const validationSchema = object().shape(({
    address: string()
        .required('Inserire l\'indirizzo')
        .length(42, 'L\'address è lungo esattamente 42 caratteri'),
    password: string().required('Inserire la password')
}));

export { initialValues, validationSchema };

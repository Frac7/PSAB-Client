import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { object, string } from 'yup';

const userPool = new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
});

const initialValues = { 
    email: '', 
    password: '' 
};
const validationSchema = object().shape(({ 
    email: string().email('E-mail non valida').required('Inserire l\'e-mail'), 
    password: string().required('Inserire la password') 
}));

export { userPool, initialValues, validationSchema };
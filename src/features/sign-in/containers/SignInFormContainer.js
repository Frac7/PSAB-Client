import React, { useMemo, useCallback } from 'react';

import {
    AuthenticationDetails,
    CognitoUserPool,
    CognitoUser
  } from "amazon-cognito-identity-js";
import { string, object } from 'yup';
import { Formik } from 'formik';
import { Row, Col } from 'reactstrap';

import SignInForm from '../components';

const SignIn = ({ history }) => {
    const userPool = useMemo(() => new CognitoUserPool({
        UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
    }), []);

    const initialValues = useMemo(() => ({ 
        email: '', 
        password: '' 
    }), []);
    const validationSchema = useMemo(() => 
        object().shape(({ 
            email: string().email('E-mail non valida').required('Inserire l\'e-mail'), 
            password: string().required('Inserire la password') 
        })), []);
    const onSubmit = useCallback(({ email, password }, { setSubmitting, setErrors }) => {
        const authDetails = new AuthenticationDetails({ Username: email, Password: password });
        const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });

        cognitoUser.authenticateUser(authDetails, {
            onSuccess(result) {
                console.log(result);
                window.localStorage.setItem('LoggedUser', email);
                setSubmitting(false);
                history.push('/profile');

            },
            onFailure(error) {
                console.error(error);
                setSubmitting(false);
                setErrors({ password: error.message });
            }
        })

        window.localStorage.setItem('UserAuth', JSON.stringify({ email }));
    }, [history, userPool]);

    return (
        <Row>
            <Col md={{ size: 6, offset: 3 }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {props => <SignInForm {...props}/>}
                </Formik>
            </Col>
        </Row>
    );
}

export default SignIn;

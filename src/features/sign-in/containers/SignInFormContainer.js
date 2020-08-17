import React, { useCallback } from 'react';

import {
    AuthenticationDetails,
    CognitoUser
  } from "amazon-cognito-identity-js";
import { Formik } from 'formik';
import { Row, Col } from 'reactstrap';

import SignInForm from '../components';

import { userPool, initialValues, validationSchema } from '../values';

const SignIn = ({ history }) => {
    const onSubmit = useCallback(({ email, password }, { setSubmitting, setErrors }) => {
        const authDetails = new AuthenticationDetails({ Username: email, Password: password });
        const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });

        cognitoUser.authenticateUser(authDetails, {
            onSuccess(result) {
                console.log(result);
                window.localStorage.setItem('LoggedIn', JSON.stringify(result));
                setSubmitting(false);
                history.push('/profile');

            },
            onFailure(error) {
                console.error(error);
                setSubmitting(false);
                setErrors({ password: error.message });
            },
            newPasswordRequired(data) {
                console.log(data);
                cognitoUser.completeNewPasswordChallenge(password, null, this);
            }
        });
    }, [history]);

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

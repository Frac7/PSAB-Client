import React, { useCallback, useEffect } from 'react';

import Auth from '@aws-amplify/auth';
import { Formik } from 'formik';
import { Row, Col } from 'reactstrap';

import SignInForm from '../components';

import { initialValues, validationSchema } from '../values';
import { PROFILE } from '../../../config/routes';

const SignIn = ({ history }) => {
    useEffect(() => {
        Auth.currentUserInfo()
            .then((result) => {
                history.push(PROFILE);
            })
            .catch((error) => console.error(error));
    }, []);

    const onSubmit = useCallback(({ email, password }, { setSubmitting, setErrors }) => {
        Auth.signIn(email, password)
            .then((result) => {
                console.log(result);
                // Auth.completeNewPassword(result, password)
                //     .then((res) => {
                //         console.log(res);
                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     });
                setSubmitting(false);
                history.push(PROFILE);
            })
            .catch((error) => {
                console.error(error);
                setSubmitting(false);
                setErrors({ password: error.message });
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

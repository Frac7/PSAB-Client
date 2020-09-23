import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import Auth from '@aws-amplify/auth';
import { Formik } from 'formik';
import { Row, Col, Container } from 'reactstrap';

import SignInForm from '../components';
import { StyledSpinner } from '../../../shared/styled';

import { initialValues, validationSchema } from '../values';
import { PROFILE } from '../../../config/routes';

import { requestLogin, loggedIn } from '../../../store/user/action';
import { Selector } from '../../../store/user/reducer';

const SignIn = ({ history, requestLogin, loggedIn, user: { data, isLoading } }) => {
    useEffect(() => {
        Auth.currentUserInfo()
            .then((user) => {
                if (!data) {
                    loggedIn({ data: user });
                }
                    history.push(PROFILE);
            })
            .catch((error) => console.error(error));
    }, [data, loggedIn, history]);

    const onSubmit = useCallback(({ email, password }, { setSubmitting, setErrors }) => {
        Auth.signIn(email, password)
            .then((result) => {
                console.log(result);
                requestLogin();
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
    }, [history, requestLogin]);

    if (isLoading) {
        return (
            <Container fluid>
                <Row className="justify-content-center align-content-center align-items-center">
                    <Col md={1}>
                        <StyledSpinner size="large"/>
                    </Col>
                </Row>
            </Container>
        )
    }

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

const mapStateToProps = (state) => ({
    user: Selector.getUser(state)
});

const dispatchToProps = {
    requestLogin,
    loggedIn
}

export default connect(mapStateToProps, dispatchToProps)(SignIn);

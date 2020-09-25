import React, { useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
        if (!data) {
            Auth.currentUserInfo()
                .then((user) => {
                    loggedIn({data: user});
                })
                .catch((error) => console.error(error));
        }
        // eslint-disable-next-line
    }, [data, loggedIn]);

    const onSubmit = useCallback(({ email, password }, { setSubmitting, setErrors }) => {
        Auth.signIn(email, password)
            .then((result) => {
                console.log(result);
                requestLogin();
                setSubmitting(false);
                history.push(PROFILE);
            })
            .catch((error) => {
                console.error(error);
                setSubmitting(false);
                setErrors({ password: error.message });
            });
    }, [history, requestLogin]);

    if (data) {
        return <Redirect to={PROFILE} />
    }

    if (isLoading) {
        return (
            <Container fluid>
                <Row className="justify-content-center align-content-center align-items-center">
                    <Col md={1} sm={1}>
                        <StyledSpinner size="large"/>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Row className="justify-content-center">
            <Col md={6} sm={10}>
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

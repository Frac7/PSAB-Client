import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { Row, Col, Container, Alert } from 'reactstrap';

import SignInForm from '../components';
import { StyledSpinner } from '../../../shared/styled';

import { initialValues, validationSchema } from '../values';
import { PROFILE } from '../../../config/routes';

import { requestLogin, requestUser } from '../../../store/user/action';
import { Selector } from '../../../store/user/reducer';

/**
 * Login handling.
 *
 * @param requestLogin
 * @param requestUser
 * @param data
 * @param isLoading
 * @param isError
 * @param error
 * @returns {JSX.Element}
 * @constructor
 */
const SignIn = ({
    requestLogin,
    requestUser,
    user: {
        data,
        isLoading,
        isError,
        error
}}) => {
    useEffect(() => {
        if (!data) {
            requestUser();
        }
    }, [data, requestUser]);

    const onSubmit = useCallback((values) => {
        requestLogin({ data: values });
    }, [requestLogin]);

    if (isError) {
        return (
            <Container fluid>
                <Row className="justify-content-center align-content-center align-items-center">
                    <Col md={10} sm={10}>
                        <Alert color="danger">{(error && error.message) || 'Si è verificato un errore'}</Alert>
                    </Col>
                </Row>
            </Container>
        )
    }

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
};

SignIn.propTypes = {
    /**
     * REQUEST_USER action dispatching
     */
    requestUser: PropTypes.func,
    /**
     * REQUEST_LOGIN action dispatching
     */
    requestLogin: PropTypes.func,
    /**
     * Current user data
     */
    user: PropTypes.object
};

const mapStateToProps = (state) => ({
    user: Selector.getUser(state)
});

const dispatchToProps = {
    requestLogin,
    requestUser
};

export default connect(mapStateToProps, dispatchToProps)(SignIn);

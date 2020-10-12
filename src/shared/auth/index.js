import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Col, Container, Row, Alert } from 'reactstrap';
import { StyledSpinner } from '../styled';

import { SIGNIN } from '../../config/routes';

import { requestUser } from '../../store/user/action';
import { Selector } from '../../store/user/reducer';

const withAuthentication = (AuthComponent, from) =>
    connect((state) => ({ user: Selector.getUser(state) }), { requestUser })(
        ({ requestUser, user: { data, isLoading, isError }}) => {
            useEffect(() => {
                if (!data) {
                    requestUser();
                }
            }, [requestUser, data]);

            if (isLoading) {
                return (
                    <Container fluid>
                        <Row className="my-3 justify-content-center align-content-center align-items-center">
                            <Col xl={1} sm={1}>
                                <StyledSpinner size="large"/>
                            </Col>
                        </Row>
                    </Container>
                )
            }

            if (isError) {
                return (
                    <Container fluid>
                        <Row className="justify-content-center align-content-center align-items-center">
                            <Col xl={12} sm={12}>
                                <Alert color="danger" className="my-3">Si è verificato un errore nel caricamento dell'account</Alert>
                            </Col>
                        </Row>
                    </Container>
                )
            }

            if (data) {
                return <AuthComponent />;
            } else {
                return <Redirect to={{
                    pathname: SIGNIN,
                    state: { from }
                }} />
            }
        });

export default withAuthentication;

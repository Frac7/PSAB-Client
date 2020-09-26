import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { SIGNIN } from '../../config/routes';
import { requestLogout } from '../../store/user/action';
import { Selector } from '../../store/user/reducer';
import { Col, Container, Row } from 'reactstrap';
import { StyledSpinner } from '../../shared/styled';

const SignOut = ({ requestLogout, user: { data } }) => {
    useEffect(() => {
        if (data) {
            requestLogout();
        }
    }, [data, requestLogout]);

    if (!data) {
        return <Redirect to={SIGNIN}/>
    } else {
        return (
            <Container fluid>
                <Row className="justify-content-center align-content-center align-items-center">
                    <Col md={1} sm={1}>
                        <StyledSpinner size="large"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect((state) => ({ user: Selector.getUser(state) }), { requestLogout })(SignOut);

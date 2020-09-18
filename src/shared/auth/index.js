import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CognitoUserPool } from "amazon-cognito-identity-js";

import { SIGNIN } from '../../config/routes';
import { loggedIn } from '../../store/user/action';

const withAuthentication = (AuthComponent) => {
    class AuthContainer extends Component {
        constructor(props) {
            super(props);
            this.state = {
                auth: window.localStorage.getItem('LoggedIn')
            };
        }

        render() {
            if (this.state.auth) {
                this.props.loggedIn({ data: JSON.parse(this.state.auth) });
                return <AuthComponent />;
            }

            return <Redirect to={SIGNIN} />
        }
    }

    return connect(null, { loggedIn })(AuthContainer);
}

const userPool = new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
});

export default withAuthentication;

export { userPool };

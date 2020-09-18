import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CognitoUserPool } from "amazon-cognito-identity-js";

import { SIGNIN } from '../../config/routes';

import { loggedIn } from '../../store/user/action';
import { Selector } from '../../store/user/reducer';

const withAuthentication = (AuthComponent) => {
    class AuthContainer extends Component {
        constructor(props) {
            super(props);

            const auth = window.localStorage.getItem('LoggedIn');
            this.state = { auth };

            if (auth && !this.props.user.data) {
                this.props.loggedIn({ data: JSON.parse(this.state.auth) });
            }
        }

        render() {
            if (this.state.auth) {
                return <AuthComponent />;
            }

            return <Redirect to={SIGNIN} />
        }
    }

    return connect((state) => ({ user: Selector.getUser(state) }), { loggedIn })(AuthContainer);
}

const userPool = new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
});

export default withAuthentication;

export { userPool };

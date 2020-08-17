import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { SIGNIN } from '../../config/routes';

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
                return <AuthComponent />;
            }
    
            return <Redirect to={SIGNIN} />   
        }
    }

    return AuthContainer;
}

export default withAuthentication;
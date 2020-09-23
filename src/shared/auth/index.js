import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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

export default withAuthentication;

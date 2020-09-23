import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Auth from '@aws-amplify/auth';

import { SIGNIN } from '../../config/routes';

import { loggedIn } from '../../store/user/action';
import { Selector } from '../../store/user/reducer';

const withAuthentication = (AuthComponent) => {
    class AuthContainer extends Component {
        constructor(props) {
            super(props);

            (async () => {
                const user = await Auth.currentUserInfo();
                if (!props.user.data) {
                    props.loggedIn({ data: JSON.parse(user) });
                }
            })();
        }

        render() {
            if (this.props.user.data) {
                return <AuthComponent />;
            }

            return <Redirect to={SIGNIN} />
        }
    }

    return connect((state) => ({ user: Selector.getUser(state) }), { loggedIn })(AuthContainer);
}

export default withAuthentication;

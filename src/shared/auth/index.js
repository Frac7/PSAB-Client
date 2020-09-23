import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Auth from '@aws-amplify/auth';

import { SIGNIN } from '../../config/routes';

import { loggedIn } from '../../store/user/action';
import { Selector } from '../../store/user/reducer';

const withAuthentication = (AuthComponent) =>
    connect((state) => ({ user: Selector.getUser(state) }), { loggedIn })(
        ({ loggedIn, user: { data }}) => {
            useEffect(() => {
                if (!data) {
                    Auth.currentUserInfo()
                        .then((user) => {
                            loggedIn({ data: user });
                        })
                        .catch((error) => console.error(error));
                }
            }, [loggedIn, data]);

            if (data) {
                return <AuthComponent />;
            } else {
                return <Redirect to={SIGNIN} />
            }
        });

export default withAuthentication;

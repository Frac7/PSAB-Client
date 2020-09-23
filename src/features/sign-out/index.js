import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import Auth from '@aws-amplify/auth';

import { loggedOut } from '../../store/user/action';
import { SIGNIN } from '../../config/routes';

const SignOut = ({ loggedOut }) => {
    useEffect(() => {
        Auth.signOut();
        loggedOut();
    }, []);

    return <Redirect to={SIGNIN} />
}

export default connect(null, { loggedOut })(SignOut);

import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '@aws-amplify/auth';

import { SIGNIN } from '../../config/routes';

const SignOut = () => {
    useEffect(() => {
        Auth.signOut();
    }, []);

    return <Redirect to={SIGNIN} />
}

export default SignOut;

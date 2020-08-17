import React from 'react';
import { Redirect } from 'react-router-dom';

import { SIGNIN } from '../../config/routes';

const SignOut = () => {
    window.localStorage.clear();

    return <Redirect to={SIGNIN} />
}

export default SignOut;

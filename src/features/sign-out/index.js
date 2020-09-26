import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { SIGNIN } from '../../config/routes';
import { requestLogout } from '../../store/user/action';
import { Selector } from '../../store/user/reducer';

const SignOut = ({ requestLogout, user: { data } }) => {
    useEffect(() => {
        if (data) {
            requestLogout();
        }
    }, [requestLogout]);

    if (!data) {
        return <Redirect to={SIGNIN}/>
    }
}

export default connect((state) => ({ user: Selector.getUser(state) }), { requestLogout })(SignOut);

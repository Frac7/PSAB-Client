import React from 'react';

import RegisterFormContainer from './containers';
import withAuthentication from '../../shared/auth';

const Register = () => <RegisterFormContainer />

export default withAuthentication(Register);

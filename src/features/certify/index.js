import React from 'react';

import CertifyFormContainer from './container';
import withAuthentication from '../../shared/auth';

const Certify = () => <CertifyFormContainer />

export default withAuthentication(Certify);

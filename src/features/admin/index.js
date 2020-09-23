import React from 'react';

import AdminContainer from './containers';
import withAuthentication from '../../shared/auth';

const Admin = () => <AdminContainer />;

export default withAuthentication(Admin);

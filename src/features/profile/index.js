import React from 'react';

import ProfileContainer from './containers';
import { PROFILE } from '../../config/routes';
import withAuthentication from '../../shared/auth';

const Profile = () => <ProfileContainer />;

export default withAuthentication(Profile, PROFILE);

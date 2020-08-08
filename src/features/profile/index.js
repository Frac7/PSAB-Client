import React from 'react';

import ProfileContainer from './containers';
import withAuthentication from '../../shared/auth';

const Profile = () => {
	return (
		<ProfileContainer />
	);
}

export default withAuthentication(Profile);

import React from 'react';

import { Container } from 'reactstrap';
import { ProfileData, OwnedLands } from '../components';

const ProfileContainer = () => {
	return (
		<Container fluid>
			<ProfileData />
			<OwnedLands />
		</Container>
	)
}

export default ProfileContainer;

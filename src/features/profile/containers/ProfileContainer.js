import React from 'react';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import { ProfileData, OwnedLands } from '../components';

import { Selector } from '../../../store/user/reducer';

const ProfileContainer = ({ user }) => {
	return (
		<Container fluid>
			<ProfileData />
			<OwnedLands />
		</Container>
	)
}

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(ProfileContainer);

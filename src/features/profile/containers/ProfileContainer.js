import React from 'react';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import { ProfileData, OwnedLands, PurchasedLands } from '../components';

import { Selector } from '../../../store/user/reducer';

const ProfileContainer = ({ user: { data } }) => {
	const { idToken: { payload: { email, name } }} = data; // username is cognito:username

	return (
		<Container fluid>
			<ProfileData user={{
				email,
				name
			}} />
			<OwnedLands />
			<PurchasedLands />
		</Container>
	)
}

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(ProfileContainer);

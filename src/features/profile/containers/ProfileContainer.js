import React from 'react';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import { ProfileData, OwnedLands, PurchasedPortions } from '../components';

import { Selector } from '../../../store/user/reducer';

const ProfileContainer = ({ user: { data } }) => {
	const { attributes: { email, name } } = data;

	return (
		<Container fluid>
			<ProfileData user={{
				email,
				name
			}} />
			<OwnedLands />
			<PurchasedPortions />
		</Container>
	)
}

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(ProfileContainer);

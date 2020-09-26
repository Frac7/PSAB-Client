import React from 'react';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import { ProfileData, OwnedLands, PurchasedPortions, OperatorActivities, CertifierActivities } from '../components';

import { Selector } from '../../../store/user/reducer';
import { CERTIFIER, OPERATOR, roles } from '../../../shared/values';

const ProfileContainer = ({ user: { data } }) => {
	const { attributes: { email, name } } = data;
	const role = parseInt(data.attributes['custom:role']);
	const address = data.attributes['custom:eth_address'];

	return (
		<Container fluid>
			<ProfileData user={{
				email,
				name
			}} />
			<OwnedLands userAddress={address} />
			<PurchasedPortions userAddress={address} />
			{role === roles.indexOf(OPERATOR) && <OperatorActivities userAddress={address} />}
			{role === roles.indexOf(CERTIFIER) && <CertifierActivities userAddress={address} />}
		</Container>
	)
}

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(ProfileContainer);

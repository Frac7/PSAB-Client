import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import { ProfileData, OwnedLands, PurchasedPortions, OperatorActivities, CertifierActivities } from '../components';

import { Selector } from '../../../store/user/reducer';
import { CERTIFIER, OPERATOR, roles } from '../../../shared/values';

/**
 * User information containers.
 *
 * @param data
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
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
};

ProfileContainer.propTypes = {
	/**
	 * Logged in user
	 */
	user: PropTypes.object
};

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(ProfileContainer);

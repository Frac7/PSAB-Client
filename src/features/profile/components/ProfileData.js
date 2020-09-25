import React from 'react';

import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

const ProfileData = ({ user: { email, name } }) => {
	return (
		<Row className="align-items-center">
			<Col md={1} sm={1} align="center">
				<FontAwesomeIcon icon={faUser} size="lg" />
			</Col>
			<Col>
				<h1>{name}</h1>
				<h6>{email}</h6>
			</Col>
		</Row>
	)
}

export default ProfileData;

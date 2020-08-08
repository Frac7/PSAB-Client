import React from 'react';

import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

const ProfileData = () => {
	return (
		<Row className="align-items-center">
			<Col md={1}>
				<FontAwesomeIcon icon={faUser} size="lg" />
			</Col>
			<Col>
				<h1>Jane Doe</h1>
			</Col>
		</Row>
	)
}

export default ProfileData;

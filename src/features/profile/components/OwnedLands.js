import React from 'react';

import { Row, Col, Jumbotron } from 'reactstrap';
import { StyledBadge } from '../../../shared/styled';

const OwnedLands = () => {
	return (
		<Row className="align-items-center">
			<Col md="auto">
				<h2>Lands</h2>
			</Col>
			<Col>
				<StyledBadge>
					Owner
				</StyledBadge>
			</Col>
			<Col md={12}>
				<Jumbotron>

				</Jumbotron>
			</Col>
		</Row>
	)
}

export default OwnedLands;

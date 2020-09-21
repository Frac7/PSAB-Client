import React from 'react';

import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
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
				<ListGroup flush>
					<ListGroupItem>Item #1</ListGroupItem>
					<ListGroupItem>Item #2</ListGroupItem>
				</ListGroup>
			</Col>
		</Row>
	)
}

export default OwnedLands;

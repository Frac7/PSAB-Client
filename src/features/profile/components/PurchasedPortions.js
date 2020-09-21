import React from 'react';

import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { StyledBadge } from '../../../shared/styled';

const PurchasedPortions = () => {
	return (
		<Row className="align-items-center">
			<Col md="auto">
				<h2>Portions</h2>
			</Col>
			<Col>
				<StyledBadge>
					Buyer
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

export default PurchasedPortions;

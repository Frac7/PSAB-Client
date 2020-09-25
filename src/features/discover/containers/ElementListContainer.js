import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const ElementListContainer = ({ ElementWrapper, elements }) => (
	<Row className="my-3">
		<Col md={12} sm={12}>
			<ListGroup flush>
			{elements.map((props, index) => (
				<ListGroupItem key={index}>
					<ElementWrapper {...props} />
				</ListGroupItem>
			))}
			</ListGroup>
		</Col>
	</Row>
);

export default ElementListContainer;

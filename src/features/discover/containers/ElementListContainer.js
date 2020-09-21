import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const ElementListContainer = ({ ElementWrapper, elements }) => (
	<>
		{elements.map((props) => (
			<Row className="my-3">
				<Col md={12}>
					<Jumbotron>
						<ElementWrapper {...props} />
					</Jumbotron>
				</Col>
			</Row>
		))}
	</>
);

export default ElementListContainer;

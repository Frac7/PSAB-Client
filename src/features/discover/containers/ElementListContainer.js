import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const ElementListContainer = ({ ElementWrapper, elements }) => (
	<>
		{elements.map((props, index) => (
			<Row className="my-3" key={index}>
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

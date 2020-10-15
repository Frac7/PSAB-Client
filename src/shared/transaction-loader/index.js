import React from 'react';
import { Col, Container, Row, Progress } from 'reactstrap';

const TransactionLoader = () => (
	<Container fluid>
		<Row className="my-3 justify-content-center align-content-center align-items-center">
			<Col xl="12" sm="12">
				<Progress animated value="100" className="progress-bar-custom" />
			</Col>
		</Row>
	</Container>
);

export default TransactionLoader;

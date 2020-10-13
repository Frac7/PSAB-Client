import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { StyledSpinner } from '../styled';

const TransactionLoader = () => (
	<Container fluid style={{zIndex: 10}}>
		<Row className="my-3 justify-content-center align-content-center align-items-center">
			<Col xl="auto" xs="auto">
				<h3>Invio della transazione in corso...</h3>
			</Col>
		</Row>
		<Row className="my-3 justify-content-center align-content-center align-items-center">
			<Col xl="auto" sm="auto">
				<StyledSpinner size="large"/>
			</Col>
		</Row>
	</Container>
);

export default TransactionLoader;

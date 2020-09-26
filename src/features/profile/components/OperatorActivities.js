import React, { useEffect, useState } from 'react';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverActivity, DiscoverProduct } from '../../../shared/view';

import contracts from '../../../shared/contracts';
import { MAINTENANCE_ACTIVITIES, PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';
import { handleOperatorFetch } from '../map';

const OperatorActivities = ({ userAddress }) => {
	const [activities, setActivities] = useState([]);
	const [products, setProducts] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		handleOperatorFetch[PRODUCT](userAddress, setActivities, setFetchErrors, setIsLoading);
		handleOperatorFetch[PROD_ACTIVITIES](userAddress, setActivities, setFetchErrors, setIsLoading);
		handleOperatorFetch[MAINTENANCE_ACTIVITIES](userAddress, setProducts, setFetchErrors, setIsLoading);
	}, [userAddress]);

	return (
		<Row className="align-items-center">
			<Col md="auto">
				<h2>Attività di produzione, manutenzione e prodotti registrati</h2>
			</Col>
			<Col>
				<StyledBadge>
					Operator
				</StyledBadge>
			</Col>
			<Col md={12} sm={12}>
				{isLoading && (
					<StyledSpinner size="large"/>
				)}
				{fetchErrors && (
					<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento degli elementi</Alert>
				)}
				{!activities.length && (
					<Alert color="danger" className="my-3">Nessuna attività registrata</Alert>
				)}
				{!products.length && (
					<Alert color="danger" className="my-3">Nessun prodotto registrato</Alert>
				)}
				<ListGroup flush>
					{activities.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverActivity {...{ element }} />
						</ListGroupItem>
					))}
					{products.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverProduct {...{ element }} />
						</ListGroupItem>
					))}
				</ListGroup>
			</Col>
		</Row>
	)
}

export default OperatorActivities;

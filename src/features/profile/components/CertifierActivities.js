import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverActivityProduct } from '../../../shared/views';

import { PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';
import { handleFetch } from '../utils';

/**
 * Activity related to the certification process for the current user.
 *
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const CertifierActivities = ({ userAddress }) => {
	const [activities, setActivities] = useState([]);
	const [products, setProducts] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setProducts([]);
		handleFetch(userAddress, setProducts, setFetchErrors, setIsLoading, PRODUCT, 'Certifier');
		setActivities([]);
		handleFetch(userAddress, setActivities, setFetchErrors, setIsLoading, PROD_ACTIVITIES, 'Certifier');
	}, [userAddress]);

	return (
		<>
			<Row className="my-3 align-items-center">
				<Col xl="auto">
					<h2>Attività di produzione e prodotti certificati</h2>
				</Col>
				<Col>
					<StyledBadge>
						Certifier
					</StyledBadge>
				</Col>
			</Row>
			<Row className="my-3 align-items-center">
				<Col xl={12} sm={12}>
					{isLoading && (
						<StyledSpinner size="large"/>
					)}
					{fetchErrors && (
						<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento degli elementi</Alert>
					)}
					{!activities.length && (
						<Alert color="info" className="my-3">Nessuna attività certificata</Alert>
					)}
					{!products.length && (
						<Alert color="info" className="my-3">Nessun prodotto certificato</Alert>
					)}
					<ListGroup flush>
						{activities.map((element, index) => (
							<ListGroupItem key={index}>
								<DiscoverActivityProduct {...element} element={PROD_ACTIVITIES} />
							</ListGroupItem>
						))}
						{products.map((element, index) => (
							<ListGroupItem key={index}>
								<DiscoverActivityProduct {...element} element={PRODUCT} />
							</ListGroupItem>
						))}
					</ListGroup>
				</Col>
			</Row>
		</>
	)
};

CertifierActivities.propTypes = {
	/**
	 * Current user Ethereum address
	 */
	userAddress: PropTypes.string
}

export default CertifierActivities;

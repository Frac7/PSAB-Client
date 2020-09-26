import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverActivity, DiscoverProduct } from '../../../shared/view';

import { PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';
import { handleCertifierFetch } from '../map';

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
		handleCertifierFetch[PRODUCT](userAddress, setProducts, setFetchErrors, setIsLoading);
		handleCertifierFetch[PROD_ACTIVITIES](userAddress, setActivities, setFetchErrors, setIsLoading);
	}, [userAddress]);

	return (
		<Row className="align-items-center">
			<Col md="auto">
				<h2>Attività di produzione e prodotti certificati</h2>
			</Col>
			<Col>
				<StyledBadge>
					Certifier
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
					<Alert color="danger" className="my-3">Nessuna attività certificata</Alert>
				)}
				{!products.length && (
					<Alert color="danger" className="my-3">Nessun prodotto certificato</Alert>
				)}
				<ListGroup flush>
					{activities.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverActivity {...element} />
						</ListGroupItem>
					))}
					{products.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverProduct {...element} />
						</ListGroupItem>
					))}
				</ListGroup>
			</Col>
		</Row>
	)
};

CertifierActivities.propTypes = {
	/**
	 * Current user Ethereum address
	 */
	userAddress: PropTypes.string
}

export default CertifierActivities;

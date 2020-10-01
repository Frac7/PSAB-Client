import React, { useCallback, useMemo, useState } from 'react';
import { Collapse, Col, Container, Row, ListGroup, ListGroupItem } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';

import { StyledLinkButton, StyledTitle } from '../styled';

import { LAND } from '../values';
import LandPortionHandling from './LandPortionHandling';
import ActivityProductOwnershipHandling from './ActivityProductOwnershipHandling';

const Title = StyledTitle('h5');

const DiscoverPortion = ({ id, ...rest }) => {
	const {
		land,
		description,
		documents,
		price,
		duration,
		expectedProduction,
		expectedMaintenanceCost,
		expectedProdActivityCost
	} = useMemo(() => {
		if (rest[0] && rest[1]) {
			return {
				...rest[0],
				...rest[1]
			};
		} else {
			return {};
		}
	}, [rest]);

	const [isLandOpen, setIsLandOpen] = useState(false);
	const [isHistoryOpen, setIsHistoryOpen] = useState(false);

	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const handleDetailsClick = useCallback(() => {
		setIsDetailsOpen((isOpen) => !isOpen);
	}, [setIsDetailsOpen])
	const icon = useMemo(() => isDetailsOpen ? faChevronUp : faChevronDown, [isDetailsOpen]);

	return (
		<Container fluid>
			<Row className="align-items-center justify-content-end my-3">
				<Col xl={9} sm={12} align="end">
					<ActivityProductOwnershipHandling
						setIsOpen={setIsHistoryOpen}
						isOpen={isHistoryOpen}
						id={id}
					/>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col xl={3} sm={12}>
					<Title>Terreno</Title>
				</Col>
				<Col>
					<LandPortionHandling
						id={land}
						isOpen={isLandOpen}
						setIsOpen={setIsLandOpen}
						element={LAND}
					/>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col xl={3} sm={12}>
					<Title>Descrizione</Title>
				</Col>
				<Col>
					<p align="justify">{description}</p>
				</Col>
			</Row>
			{documents && (
			<Row className="align-items-center my-3">
				<Col xl={3} sm={12}>
					<Title>Documenti</Title>
				</Col>
				<Col>
					<ListGroup flush>
						<ListGroupItem className="text-success" tag="a" href={documents} target="_blank">Documento allegato</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>)}
			<Row className="align-items-center my-3">
				<Col align="center">
					<StyledLinkButton color="link" onClick={handleDetailsClick}>
						Dati del contratto <FontAwesomeIcon icon={icon} />
					</StyledLinkButton>
				</Col>
			</Row>
			<Collapse isOpen={isDetailsOpen}>
				<Row className="align-items-center my-3">
					<Col xl={3} sm={12}>
						<Title>Canone</Title>
					</Col>
					<Col>
						<p align="justify">€ {price && (parseInt(price)/100).toFixed(2)}</p>
					</Col>
				</Row>
				<Row className="align-items-center my-3">
					<Col xl={3} sm={12}>
						<Title>Durata</Title>
					</Col>
					<Col>
						<p align="justify">{duration ? `Fino al ${new Date(parseInt(duration)).toLocaleDateString()}` : 'Perpetua'}</p>
					</Col>
				</Row>
				<Row className="align-items-center my-3">
					<Col xl={3} sm={12}>
						<Title>Produzione attesa</Title>
					</Col>
					<Col>
						<p align="justify">{expectedProduction}</p>
					</Col>
				</Row>
				<Row className="align-items-center my-3">
					<Col xl={3} sm={12}>
						<Title>Costi di manutenzione attesi</Title>
					</Col>
					<Col>
						<p align="justify">€ {expectedMaintenanceCost && (parseInt(expectedMaintenanceCost)/100).toFixed(2)}</p>
					</Col>
				</Row>
				<Row className="align-items-center my-3">
					<Col xl={3} sm={12}>
						<Title>Costi di produzione attesi</Title>
					</Col>
					<Col>
						<p align="justify">€ {expectedProdActivityCost && (parseInt(expectedProdActivityCost)/100).toFixed(2)}</p>
					</Col>
				</Row>
			</Collapse>
		</Container>
	);
};

export default DiscoverPortion;

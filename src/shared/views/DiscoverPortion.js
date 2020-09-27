import React, { useCallback, useMemo, useState } from 'react';
import { Collapse, Col, Container, Row, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';

import { StyledFilledButton, StyledLinkButton,
	StyledTitle } from '../styled';

import { LAND } from '../values';
import LandPortionHandling from './LandPortionHandling';

const DiscoverPortion = ({
	id,
	land,
	description,
	documents,
	price,
	duration,
	expectedProduction,
	expMainActivityCost,
	expProdActivityCost
}) => {
	const Title = StyledTitle('h5');

	const [isLandOpen, setIsLandOpen] = useState(false);

	const [isHistoryOpen, setIsHistoryOpen] = useState(false);
	const handleHistoryClick = useCallback(() => {
		setIsHistoryOpen((isOpen) => !isOpen);
	}, [setIsHistoryOpen]);

	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const handleDetailsClick = useCallback(() => {
		setIsDetailsOpen((isOpen) => !isOpen);
	}, [setIsDetailsOpen])
	const icon = useMemo(() => isDetailsOpen ? faChevronUp : faChevronDown, [isDetailsOpen]);

	return (
		<Container fluid>
			<Row className="align-items-center justify-content-end my-3">
				<Col md={9} sm={12} align="end">
					<StyledFilledButton onClick={handleHistoryClick}>
						Sfoglia cronologia
					</StyledFilledButton>
					<Modal className="modal-lg" isOpen={isHistoryOpen} toggle={handleHistoryClick}>
						<ModalHeader toggle={handleHistoryClick}>
							Dettagli Porzione #{id}</ModalHeader>
						<ModalBody>
							<ListGroup flush>
								{[].map((item, index) => (
									<ListGroupItem key={index}>{item}</ListGroupItem>
								))}
							</ListGroup>
						</ModalBody>
					</Modal>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
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
				<Col md={3} sm={12}>
					<Title>Descrizione</Title>
				</Col>
				<Col>
					<p align="justify">{description}</p>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
					<Title>Documenti</Title>
				</Col>
				<Col>
					<ListGroup flush>
						{/* TODO: change with name s3 */}
						{documents && documents.map((document, index) => (
							<ListGroupItem className="text-success" key={index} tag="a" href={document} target="_blank">Documento #{index}</ListGroupItem>
						))}
					</ListGroup>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col align="center">
					<StyledLinkButton color="link" onClick={handleDetailsClick}>
						Dati del contratto <FontAwesomeIcon icon={icon} />
					</StyledLinkButton>
				</Col>
			</Row>
			{/*<Collapse isOpen={isDetailsOpen}>*/}
			{/*	<Row className="align-items-center my-3">*/}
			{/*		<Col md={3} sm={12}>*/}
			{/*			<Title>Canone</Title>*/}
			{/*		</Col>*/}
			{/*		<Col>*/}
			{/*			<p align="justify">€ {price.toFixed(2)}</p>*/}
			{/*		</Col>*/}
			{/*	</Row>*/}
			{/*	<Row className="align-items-center my-3">*/}
			{/*		<Col md={3} sm={12}>*/}
			{/*			<Title>Durata</Title>*/}
			{/*		</Col>*/}
			{/*		<Col>*/}
			{/*			<p align="justify">{duration}</p>*/}
			{/*		</Col>*/}
			{/*	</Row>*/}
			{/*	<Row className="align-items-center my-3">*/}
			{/*		<Col md={3} sm={12}>*/}
			{/*			<Title>Produzione attesa</Title>*/}
			{/*		</Col>*/}
			{/*		<Col>*/}
			{/*			<p align="justify">{expectedProduction}</p>*/}
			{/*		</Col>*/}
			{/*	</Row>*/}
			{/*	<Row className="align-items-center my-3">*/}
			{/*		<Col md={3} sm={12}>*/}
			{/*			<Title>Costi di manutenzione attesi</Title>*/}
			{/*		</Col>*/}
			{/*		<Col>*/}
			{/*			<p align="justify">€ {expMainActivityCost.toFixed(2)}</p>*/}
			{/*		</Col>*/}
			{/*	</Row>*/}
			{/*	<Row className="align-items-center my-3">*/}
			{/*		<Col md={3} sm={12}>*/}
			{/*			<Title>Costi di produzione attesi</Title>*/}
			{/*		</Col>*/}
			{/*		<Col>*/}
			{/*			<p align="justify">€ {expProdActivityCost.toFixed(2)}</p>*/}
			{/*		</Col>*/}
			{/*	</Row>*/}
			{/*</Collapse>*/}
		</Container>
	);
};

export default DiscoverPortion;

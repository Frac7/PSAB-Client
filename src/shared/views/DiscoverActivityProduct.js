import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

import { StyledTitle } from '../styled';

import LandPortionHandling from './LandPortionHandling';

import { MAINTENANCE_ACTIVITIES, PORTION } from '../values';
import CertificationHandling from './CertificationHandling';

const Title = StyledTitle('h5');

const DiscoverActivityProduct = ({ id, portion, description, registeredBy, element }) => {
	const [isPortionOpen, setIsPortionOpen] = useState(false);
	const [isHistoryOpen, setIsHistoryOpen] = useState(false);

	return (
		<Container fluid>
			<Row className="my-3">
				<Col>
					<h6 className="text-black-50">{element} #{id}</h6>
				</Col>
			</Row>
			{element !== MAINTENANCE_ACTIVITIES && (
				<Row className="align-items-center justify-content-end my-3">
					<Col xl={9} sm={12} align="end">
						<CertificationHandling
							id={id}
							isOpen={isHistoryOpen}
							setIsOpen={setIsHistoryOpen}
							element={element}
						/>
					</Col>
				</Row>)}
			<Row className="align-items-center my-3">
				<Col xl={3} sm={12}>
					<Title>Porzione</Title>
				</Col>
				<Col>
					<LandPortionHandling
						id={portion}
						isOpen={isPortionOpen}
						setIsOpen={setIsPortionOpen}
						element={PORTION}
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
			<Row className="align-items-center my-3">
				<Col xl={3} sm={12}>
					<Title>Registrato da</Title>
				</Col>
				<Col>
					<p align="justify">{registeredBy}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default DiscoverActivityProduct;

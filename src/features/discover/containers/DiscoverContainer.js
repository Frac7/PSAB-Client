import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ElementListContainer from './ElementListContainer';

import { mock } from '../mock';

import {
	LAND,
	PORTION,
	PROD_ACTIVITIES,
	PRODUCT,
	MAINTENANCE_ACTIVITIES
} from '../../../shared/values';
import { ElementSelector } from '../../../shared/element-dropdown';

import { elementWrappers } from '../map';

const DiscoverContainer = () => {
	const [currentElement, setCurrentElement] = useState(LAND);

	return (
		<Container fluid>
			<Row className="justify-content-between align-items-center">
				<Col>
					<h1>Scopri {currentElement}</h1>
				</Col>
				<Col md={5} className="justify-content-center">
					<ElementSelector
						elements={[
							LAND,
							PORTION,
							PROD_ACTIVITIES,
							PRODUCT,
							MAINTENANCE_ACTIVITIES
						]}
						currentElement={currentElement}
						setCurrentElement={setCurrentElement}
					/>
				</Col>
			</Row>
			<ElementListContainer
				elements={mock[currentElement]}
				ElementWrapper={elementWrappers[currentElement]}
			/>
		</Container>
	)

};

export default DiscoverContainer;

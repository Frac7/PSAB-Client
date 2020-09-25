import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ElementListContainer from './ElementListContainer';
import { ElementSelector } from '../../../shared/element-dropdown';

import { mock } from '../mock';

import {
	LAND,
	PORTION,
	PROD_ACTIVITIES,
	PRODUCT,
	MAINTENANCE_ACTIVITIES
} from '../../../shared/values';

import { elementWrappers } from '../map';
import contracts from '../../../shared/contracts';

const DiscoverContainer = () => {
	const [currentElement, setCurrentElement] = useState(LAND);
	useEffect(() => {
		const contractInstance = new window.web3.eth.Contract(contracts[currentElement].ABI, contracts[currentElement].address);
		// TODO: add fetch feedback
		contractInstance.methods.getAll()
			.call({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
			.then((result) => {
				console.log(result);
			}).catch((error) => {
			console.log(error);
		});
	}, [currentElement]);

	return (
		<Container fluid>
			<Row className="justify-content-between align-items-center">
				<Col>
					<h1>Esplora {currentElement}</h1>
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

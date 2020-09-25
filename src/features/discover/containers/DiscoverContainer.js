import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

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

import { Selector } from '../../../store/user/reducer';

const DiscoverContainer = ({ user }) => {
	const [currentElement, setCurrentElement] = useState(LAND);
	useEffect(() => {
		const contractInstance = new window.web3.eth.Contract(contracts[currentElement].ABI, contracts[currentElement].address);
		// TODO: add fetch feedback
		contractInstance.methods.getAll()
			.call({ from : user.data.attributes['custom:eth_address'] })
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [currentElement, user]);

	return (
		<Container fluid>
			<Row className="justify-content-between align-items-center">
				<Col>
					<h1>Esplora {currentElement}</h1>
				</Col>
				<Col md={5} sm={12} className="justify-content-center">
					<ElementSelector
						elements={[
							{
								type: LAND
							},
							{
								type: PORTION
							},
							{
								type: PROD_ACTIVITIES
							},
							{
								type: PRODUCT
							},
							{
								type: MAINTENANCE_ACTIVITIES
							}
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

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(DiscoverContainer);

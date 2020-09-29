import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

/**
 * Container for the list of element (products, lands, ...).
 *
 * @param ElementWrapper
 * @param elements
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const ElementListContainer = ({ ElementWrapper, elements }) => (
	<Row className="my-3">
		<Col xl={12} sm={12}>
			<ListGroup flush>
			{elements.map((props, index) => (
				<ListGroupItem key={index}>
					<ElementWrapper {...props} />
				</ListGroupItem>
			))}
			</ListGroup>
		</Col>
	</Row>
);

ElementListContainer.propTypes = {
	/**
	 * Wrapper that shows element information
	 */
	ElementWrapper: PropTypes.func,
	/**
	 * List of elements to show
	 */
	elements: PropTypes.array
}

export default ElementListContainer;

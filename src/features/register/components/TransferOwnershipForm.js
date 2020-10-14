import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';

import { StyledFilledButton, StyledSpinner } from '../../../shared/styled';

import { fetchPortionsByBuyer, fetchPortionsByOwner } from '../../../shared/utils';

/**
 * Form for selling portion or transfer its ownership.
 *
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @param resetForm
 * @param initialValues
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const TransferOwnership = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
	resetForm,
	initialValues,
	userAddress
}) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		resetForm(initialValues);
	}, [resetForm, initialValues]);

	useEffect(() => {
		fetchPortionsByOwner(userAddress, setElements, setIsLoading, setFetchErrors);
		fetchPortionsByBuyer(userAddress, setElements, setIsLoading, setFetchErrors);
	}, [userAddress, setElements, setIsLoading, setFetchErrors]);

	if (isLoading) {
		return (
			<Container fluid>
				<Row className="my-3 justify-content-center align-content-center align-items-center">
					<Col xl="auto" sm="auto">
						<StyledSpinner size="large"/>
					</Col>
				</Row>
			</Container>
		)
	}

	if (fetchErrors) {
		return (
			<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento delle porzioni di terreno</Alert>
		);
	}

	if (!elements.length) {
		return (
			<Alert color="info" className="my-3">Nessuna porzione di terreno disponibile per il trasferimento di proprietà o per la vendita</Alert>
		);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="portion">Porzione relativa</Label>
				<Input valid={touched.portion && !errors.portion} type="select" name="portion" id="portion" onChange={handleChange} value={values.portion} disabled={isSubmitting}>
					<option value="" />
					{elements.map((element, index) => <option key={index} value={index}>{element.description}</option>)}
				</Input>
				{ errors.portion && <FormText color="danger">{errors.portion}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="address">Address</Label>
				<Input valid={touched.address && !errors.address} type="text" name="address" id="address" placeholder="0xa1b2c3d4e5f6..." onChange={handleChange} value={values.address} disabled={isSubmitting}/>
				{ errors.address && <FormText color="danger">{errors.address}</FormText>}
			</FormGroup>
			<StyledFilledButton type="submit" disabled={isSubmitting}>
				Trasferisci
			</StyledFilledButton>
		</Form>
	);
};

TransferOwnership.propTypes = {
	/**
	 * Form values
	 */
	values: PropTypes.object,
	/**
	 * Touched fields
	 */
	touched: PropTypes.object,
	/**
	 * Errors in fields
	 */
	errors: PropTypes.object,
	/**
	 * Form submission
	 */
	isSubmitting: PropTypes.bool,
	/**
	 * Form submission handling
	 */
	handleSubmit: PropTypes.func,
	/**
	 * Field changes handling
	 */
	handleChange: PropTypes.func,
	/**
	 * Form values reset
	 */
	resetForm: PropTypes.func,
	/**
	 * Initial form values
	 */
	initialValues: PropTypes.object,
	/**
	 * Ethereum address
	 */
	userAddress: PropTypes.string
};

export default TransferOwnership;

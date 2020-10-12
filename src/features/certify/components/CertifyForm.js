import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';

import { StyledFilledButton, StyledSpinner } from '../../../shared/styled';

import { handleFetching } from '../map';

/**
 * Form for certifying products and production activities.
 *
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @param resetForm
 * @param initialValues
 * @param currentForm
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const ProductActivitiesForm = ({
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange,
	resetForm,
	initialValues,
	currentForm,
	userAddress
}) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		resetForm(initialValues);
	}, [resetForm, initialValues]);

	useEffect(() => {
		setElements([]);
		handleFetching(userAddress, setElements, fetchErrors, setFetchErrors, setIsLoading, currentForm);
	}, [currentForm, userAddress, setElements, fetchErrors, setFetchErrors, setIsLoading]);

	if (isLoading) {
		return (
			<Container fluid>
				<Row className="my-3 justify-content-center align-content-center align-items-center">
					<Col xl={1} sm={1}>
						<StyledSpinner size="large"/>
					</Col>
				</Row>
			</Container>
		)
	}

	if (fetchErrors) {
		return (
			<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento degli elementi certificabili</Alert>
		);
	}

	if (!elements.length) {
		return (
			<Alert color="info" className="my-3">Nessun elemento disponibile per la certificazione</Alert>
		);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="portion">Oggetto della certificazione</Label>
				<Input valid={touched.object && !errors.object} type="select" name="object" id="object" onChange={handleChange} value={values.object}>
					<option value=""/>
					{elements.map((element, index) => <option key={index} value={index}>{element.description}</option>)}
				</Input>
				{ errors.object && <FormText color="danger">{errors.object}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="description">Descrizione</Label>
				<Input valid={
					touched.description && !errors.description} type="textarea" name="description" id="description" onChange={handleChange} value={values.description}/>
				{ errors.description && <FormText color="danger">{errors.description}</FormText>}
			</FormGroup>
			<StyledFilledButton type="submit" disabled={isSubmitting}>
				Certifica
			</StyledFilledButton>
		</Form>
	);
};

ProductActivitiesForm.propTypes = {
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
	 * Current form, product or production activity
	 */
	currentForm: PropTypes.string,
	/**
	 * Current user Ethereum address
	 */
	userAddress: PropTypes.string
};

export default ProductActivitiesForm;

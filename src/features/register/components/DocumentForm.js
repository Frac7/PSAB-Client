import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';

import DocumentField from './DocumentField';
import { StyledFilledButton, StyledSpinner } from '../../../shared/styled';

import { LAND, PORTION } from '../../../shared/values';
import { fetchLandsByOwner, fetchPortionsByOwner } from '../../../shared/utils';

/**
 * Document registration form.
 *
 * @param reference
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @param setFieldValue
 * @param resetForm
 * @param initialValues
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const DocumentForm = ({
	reference,
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange,
	setFieldValue,
	resetForm,
	initialValues,
	userAddress
}) => {
	useEffect(() => {
		resetForm(initialValues);
	}, [resetForm, initialValues]);

	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		setElements([]);

		switch (values.element) {
			case LAND:
				fetchLandsByOwner(userAddress, setElements, setIsLoading, setFetchErrors);
				break;
			case PORTION:
				fetchPortionsByOwner(userAddress, setElements, setIsLoading, setFetchErrors);
				break;
			default:
				setIsLoading(false);
		}
	}, [values.element, userAddress]);

	if (isLoading) {
		return (
			<Container fluid>
				<Row className="my-3 justify-content-center align-content-center align-items-center">
					<Col xl="auto" sm="auto">
						<StyledSpinner size="large"/>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<>
			{!elements.length && <Alert color="info" className="my-3">Nessun elemento disponibile per la registrazione di documenti</Alert>}
			{fetchErrors && <Alert color="danger" className="my-3">Si è verificato un errore nel caricamento degli elementi</Alert>}
			<Form innerRef={reference} onSubmit={handleSubmit} noValidate>
				<FormGroup>
					<Label for="element">Elemento per il quale registrare il documento</Label>
					<Input valid={touched.element && !errors.element} type="select" name="element" id="element" onChange={handleChange} value={values.element} disabled={isSubmitting}>
						<option value="" />
						<option value={LAND}>{LAND}</option>
						<option value={PORTION}>{PORTION}</option>
					</Input>
					{errors.element && <FormText color="danger">{errors.element}</FormText>}
				</FormGroup>
				<FormGroup>
					<Label for="id">{values.element}</Label>
					<Input valid={touched.id && !errors.id} type="select" name="id" id="id" onChange={handleChange} value={values.id} disabled={isSubmitting}>
						<option value="" />
						{elements.map((element, index) => <option key={index} value={element.id}>{element.id} - {element.description}</option>)}
					</Input>
					{errors.id && <FormText color="danger">{errors.id}</FormText>}
				</FormGroup>
				<FormGroup>
					<DocumentField
						isSubmitting={isSubmitting}
						setFieldValue={setFieldValue}
						values={values}
						errors={errors}
						handleChange={handleChange}
						touched={touched}
					/>
				</FormGroup>
				<StyledFilledButton type="submit" disabled={isSubmitting}>
					Aggiungi
				</StyledFilledButton>
			</Form>
		</>
	);
}

DocumentForm.propTypes = {
	/**
	 * Form reference
	 */
	reference: PropTypes.object,
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
	 * Field specific setter
	 */
	setFieldValue: PropTypes.func,
	/**
	 * Form values reset
	 */
	resetForm: PropTypes.func,
	/**
	 * Initial form values
	 */
	initialValues: PropTypes.object,
}

export default DocumentForm;

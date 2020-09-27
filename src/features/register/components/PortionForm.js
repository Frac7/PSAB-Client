import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormText, Input, Label, Alert, Container, Row, Col } from 'reactstrap';

import DocumentField from './DocumentField';
import { StyledFilledButton, StyledSpinner } from '../../../shared/styled';

import { fetchLandsByOwner } from '../../../shared/utils';

/**
 * Portion registration form.
 *
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @param setFieldValue
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const PortionForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
	setFieldValue,
	userAddress
}) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchLandsByOwner(userAddress, setElements, setIsLoading, setFetchErrors);
	}, [userAddress]);

	if (isLoading) {
		return (
			<Container fluid>
				<Row className="justify-content-center align-content-center align-items-center">
					<Col md={1} sm={1}>
						<StyledSpinner size="large"/>
					</Col>
				</Row>
			</Container>
		)
	}

	if (fetchErrors) {
		return (
			<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento dei terreni</Alert>
		);
	}

	if (!elements.length) {
		return (
			<Alert color="info" className="my-3">Nessun terreno disponibile per la suddivisione</Alert>
		);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="land">Terreno da dividere</Label>
				<Input valid={touched.land && !errors.land} type="select" name="land" id="land" onChange={handleChange} value={values.land}>
					<option value="" />
					{elements.map((element, index) => <option key={index} value={index}>{element.description}</option>)}
				</Input>
				{ errors.land && <FormText color="danger">{errors.land}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="description">Descrizione</Label>
				<Input valid={touched.description && !errors.description} type="textarea" name="description" id="description" onChange={handleChange} value={values.description}/>
				{ errors.description && <FormText color="danger">{errors.description}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="documents">Documenti</Label>
				<FormText>Deve essere caricato un documento al minimo; una volta inserito un file, apparirà un nuovo campo di input per ulteriori file</FormText>
				<DocumentField
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
	);
};

PortionForm.propTypes = {
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
	handleChange: PropTypes.func
};

export default PortionForm;

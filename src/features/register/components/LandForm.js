import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';
import DocumentField from './DocumentField';

/**
 * Land registration form.
 *
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @param setFieldValue
 * @param resetForm
 * @param initialValues
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const LandForm = ({
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange,
	setFieldValue,
	resetForm,
	initialValues
}) => {
	useEffect(() => {
		resetForm(initialValues);
	}, [resetForm, initialValues]);

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="description">Descrizione</Label>
				<Input valid={touched.description && !errors.description} type="textarea" name="description" id="description" onChange={handleChange} value={values.description}/>
				{ errors.description && <FormText color="danger">{errors.description}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="documents">Documenti</Label>
				<FormText>Deve essere caricato un documento al minimo</FormText>
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
	);
}

LandForm.propTypes = {
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
}

export default LandForm;

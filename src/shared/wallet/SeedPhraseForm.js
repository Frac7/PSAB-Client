import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../styled';

/**
 * Wallet Seed Phrase management
 *
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const SeedPhraseForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange
}) => (
	<Form onSubmit={handleSubmit} noValidate>
		<FormGroup>
			<Label for="username">Seed Phrase</Label>
			<Input valid={touched.phrase && !errors.phrase} type="textarea" name="phrase" id="phrase" onChange={handleChange} value={values.phrase}/>
			{errors.phrase && <FormText color="danger">{errors.phrase}</FormText>}
			<FormText>Inserire la frase composta da 12 parole utilizzata per sbloccare il wallet</FormText>
		</FormGroup>
		<StyledFilledButton type="submit" disabled={isSubmitting}>
			Conferma
		</StyledFilledButton>
	</Form>
);

SeedPhraseForm.propTypes = {
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
}

export default SeedPhraseForm;

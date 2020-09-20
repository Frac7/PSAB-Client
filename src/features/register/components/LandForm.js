import React from 'react';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';
import DocumentField from './DocumentField';

const LandForm = ({
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange
}) => (
	<Form onSubmit={handleSubmit} noValidate>
		<FormGroup>
			<Label for="description">Descrizione</Label>
			<Input valid={touched.description && !errors.description} type="textarea" name="description" id="description" onChange={handleChange} value={values.description}/>
			{ errors.description && <FormText color="danger">{errors.description}</FormText>}
		</FormGroup>
		<FormGroup>
			<Label for="documents">Documenti</Label>
			<FormText>Deve essere caricato un documento al minimo; una volta inserito un file, apparirà un nuovo campo di input per ulteriori file</FormText>
			<DocumentField
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

export default LandForm;

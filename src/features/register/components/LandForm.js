import React, { useCallback, useState } from 'react';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

const LandForm = ({
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange
}) => {
	const [fileInputs, setFileInputs] = useState(1);

	const handleFileChange = useCallback((event) => {
		event.persist();

		handleChange(event);
		if (event.target.value !== '') {
			setFileInputs((prev) => prev++);
		} // TODO: improve handling
	}, [setFileInputs]);
	// TODO: render the correct number of input fields

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="description">Descrizione</Label>
				<Input valid={touched.description && !errors.description} type="textarea" name="description" id="description" onChange={handleChange} value={values.description}/>
				{ errors.description && <FormText color="danger">{errors.description}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="documents">Documenti</Label>
				<Input valid={touched.documents && !errors.documents} type="file" name="documents" id="documents" onChange={handleFileChange} value={values.documents}/>
				{ errors.documents && <FormText color="danger">{errors.documents}</FormText>}
			</FormGroup>
			<StyledFilledButton type="submit" disabled={isSubmitting}>
				Aggiungi
			</StyledFilledButton>
		</Form>
	);
}

export default LandForm;

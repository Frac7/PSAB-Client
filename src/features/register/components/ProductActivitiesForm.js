import React from 'react';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

const ProductActivitiesForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange
}) => (
	<Form onSubmit={handleSubmit} noValidate>
		<FormGroup>
			<Label for="portion">Porzione relativa alla produzione</Label>
			<Input valid={touched.portion && !errors.portion} type="number" name="portion" id="portion" onChange={handleChange} value={values.portion}/>
			{ errors.portion && <FormText color="danger">{errors.portion}</FormText>}
		</FormGroup>
		<FormGroup>
			<Label for="description">Descrizione</Label>
			<Input valid={
				touched.description && !errors.description} type="textarea" name="description" id="description" onChange={handleChange} value={values.description}/>
			{ errors.description && <FormText color="danger">{errors.description}</FormText>}
		</FormGroup>
		<StyledFilledButton type="submit" disabled={isSubmitting}>
			Aggiungi
		</StyledFilledButton>
	</Form>
);

export default ProductActivitiesForm;

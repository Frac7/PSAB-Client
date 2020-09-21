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
			<Label for="portion">Oggetto della certificazione</Label>
			<Input valid={touched.object && !errors.object} type="number" name="object" id="object" onChange={handleChange} value={values.object}/>
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

export default ProductActivitiesForm;

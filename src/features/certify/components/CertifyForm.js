import React, { useEffect, useState } from 'react';
import { Alert, Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

import { handleFetching } from '../map';

const ProductActivitiesForm = ({
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange,
	currentForm
}) => {
	const [elements, setElements] = useState([]);
	useEffect(() => {
		handleFetching[currentForm]('0x99018CdDAe586De875E8B5c9a3069D387902651d', setElements) // TODO: change with user address
	}, [currentForm, setElements]);

	if (elements.length === 0) {
		return (
			<Alert color="danger" className="my-3">Nessuna elemento disponibile per la certificazione</Alert>
		);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="portion">Oggetto della certificazione</Label>
				<Input valid={touched.object && !errors.object} type="select" name="object" id="object" onChange={handleChange} value={values.object}>
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
}

export default ProductActivitiesForm;

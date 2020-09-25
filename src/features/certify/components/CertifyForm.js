import React, { useEffect } from 'react';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';
import contracts from '../../../shared/contracts';

const ProductActivitiesForm = ({
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange,
	currentForm
}) => {
	useEffect(() => {
		const contractInstance = new window.web3.eth.Contract(contracts[currentForm].ABI, contracts[currentForm].address);
		// TODO: add fetch feedback
		contractInstance.methods.getAll()
			.call({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [currentForm]);

	return (
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
}

export default ProductActivitiesForm;

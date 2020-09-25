import React, { useEffect, useState } from 'react';
import { Form, FormGroup, FormText, Input, Label, Alert } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

import contracts from '../../../shared/contracts';
import { PORTION } from '../../../shared/values';

const ProductActivitiesForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange
}) => {
	const [elements, setElements] = useState([]);
	useEffect(() => {
		const elements = [];

		const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
		// TODO: add operation feedback
		portionInstance.methods.getTotalPortions()
			.call({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
			.then((total) => {
				console.log(total);
				total = parseInt(total);
				for (let i = 0; i < total; i++) {
					portionInstance.methods.getById(i)
						.call({ from: '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' })
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (i === total - 1) {
								setElements(elements);
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (elements.length === 0) {
		return (
			<Alert color="danger" className="my-3">Nessuna porzione di terreno disponibile per la registrazione di elementi</Alert>
		);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="portion">Porzione relativa all'oggetto della registrazione</Label>
				<Input valid={touched.portion && !errors.portion} type="select" name="portion" id="portion" onChange={handleChange} value={values.portion}>
					{elements.map((element, index) => <option key={index} value={index}>{element.description}</option>)}
				</Input>
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
}

export default ProductActivitiesForm;

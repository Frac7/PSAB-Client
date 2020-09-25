import React, { useEffect, useState } from 'react';
import { Form, FormGroup, FormText, Input, Label, Alert } from 'reactstrap';

import DocumentField from './DocumentField';
import { StyledFilledButton } from '../../../shared/styled';

import contracts from '../../../shared/contracts';
import { LAND } from '../../../shared/values';

const PortionForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
	setFieldValue
}) => {
	const [elements, setElements] = useState([]);
	useEffect(() => {
		const elements = [];

		const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);
		// TODO: add fetch feedback
		landInstance.methods.getByOwner('0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5')
			.call({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
			.then((lands) => {
				console.log(lands);
				lands.forEach((land, index, lands) => {
					landInstance.methods.getById(index)
						.call({ from: '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' })
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (index === lands.length - 1) {
								setElements(elements);
							}
						})
						.catch((error) => {
							console.log(error);
						});
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (elements.length === 0) {
		return (
			<Alert color="danger" className="my-3 text">Nessun terreno disponibile per la suddivisione</Alert>
		);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="land">Terreno da dividere</Label>
				<Input valid={touched.land && !errors.land} type="select" name="land" id="land" onChange={handleChange} value={values.land}>
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
}

export default PortionForm;

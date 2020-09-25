import React, { useEffect } from 'react';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

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
	useEffect(() => {
		const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);
		// TODO: add fetch feedback
		landInstance.methods.getByOwner('0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5')
			.call({ from : '0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5' }) // TODO: replace with user address
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="land">Terreno da dividere</Label>
				{/* TODO: change with dropdown */}
				<Input valid={touched.land && !errors.land} type="number" name="land" id="land" onChange={handleChange} value={values.land}/>
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

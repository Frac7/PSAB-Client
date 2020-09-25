import React, { useEffect } from 'react';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

import contracts from '../../../shared/contracts';
import { PORTION } from '../../../shared/values';

const ContractTermsForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange
}) => {
	useEffect(() => {
		const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
		// TODO: add fetch feedback
		portionInstance.methods.getByOwner('0xf41592AbcC6FB42EF24d2Cf2e74D4a6a1Ba0C4a5')
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
				<Label for="portion">Porzione relativa</Label>
				{/* TODO: change with dropdown */}
				<Input valid={touched.portion && !errors.portion} type="number" name="portion" id="portion" onChange={handleChange} value={values.portion}/>
				{ errors.portion && <FormText color="danger">{errors.portion}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="address">Address</Label>
				<Input valid={touched.address && !errors.address} type="text" name="address" id="address" placeholder="0xa1b2c3d4e5f6..." onChange={handleChange} value={values.address}/>
				{ errors.address && <FormText color="danger">{errors.address}</FormText>}
			</FormGroup>
			<StyledFilledButton type="submit" disabled={isSubmitting}>
				Trasferisci
			</StyledFilledButton>
		</Form>
	);
}

export default ContractTermsForm;

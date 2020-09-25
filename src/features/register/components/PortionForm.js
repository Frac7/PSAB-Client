import React, { useEffect } from 'react';
import { Form, FormGroup, FormText, Input, Label, InputGroup, InputGroupAddon } from 'reactstrap';

import { faEuroSign } from '@fortawesome/free-solid-svg-icons/faEuroSign';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
			}).catch((error) => {
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
			<FormGroup tag="fieldset">
				<legend>Dati del contratto</legend>
				<FormGroup>
					<Label for="price">Prezzo</Label>
					<InputGroup>
						<InputGroupAddon addonType="prepend" className="align-items-center mx-3">
							<FontAwesomeIcon icon={faEuroSign} size="lg"/>
						</InputGroupAddon>
						<Input valid={touched.price && !errors.price} type="number" name="price" id="price" onChange={handleChange} value={values.price}/>
					</InputGroup>
					{ errors.price && <FormText color="danger">{errors.price}</FormText>}
				</FormGroup>
				<FormGroup>
					<Label for="duration">Durata</Label>
					<Input valid={touched.duration && !errors.duration} type="text" name="duration" id="duration" onChange={handleChange} value={values.duration}/>
					<FormText>Contratto perpetuo, contratto valido per <i>n</i> anni, ...</FormText>
					{ errors.duration && <FormText color="danger">{errors.duration}</FormText>}
				</FormGroup>
				<FormGroup>
					<Label for="expectedProduction">Produzione attesa</Label>
					<Input valid={touched.expectedProduction && !errors.expectedProduction} type="text" name="expectedProduction" id="expectedProduction" onChange={handleChange} value={values.expectedProduction}/>
					{ errors.expectedProduction && <FormText color="danger">{errors.expectedProduction}</FormText>}
				</FormGroup>
				<FormGroup>
					<Label for="expMainActivityCost">Costi di manutenzione attesi</Label>
					<InputGroup>
						<InputGroupAddon addonType="prepend" className="align-items-center mx-3">
							<FontAwesomeIcon icon={faEuroSign} size="lg"/>
						</InputGroupAddon>
						<Input valid={touched.expMainActivityCost && !errors.expMainActivityCost} type="number" name="expMainActivityCost" id="expMainActivityCost" onChange={handleChange} value={values.expMainActivityCost}/>
					</InputGroup>
					{ errors.expMainActivityCost && <FormText color="danger">{errors.expMainActivityCost}</FormText>}
				</FormGroup>
				<FormGroup>
					<Label for="expProdActivityCost">Costi di produzione attesi</Label>
					<InputGroup>
						<InputGroupAddon addonType="prepend" className="align-items-center mx-3">
							<FontAwesomeIcon icon={faEuroSign} size="lg"/>
						</InputGroupAddon>
						<Input valid={touched.expProdActivityCost && !errors.expProdActivityCost} type="number" name="expProdActivityCost" id="expProdActivityCost" onChange={handleChange} value={values.expProdActivityCost}/>
					</InputGroup>
					{ errors.expProdActivityCost && <FormText color="danger">{errors.expProdActivityCost}</FormText>}
				</FormGroup>
			</FormGroup>
			<StyledFilledButton type="submit" disabled={isSubmitting}>
				Aggiungi
			</StyledFilledButton>
		</Form>
	);
}

export default PortionForm;

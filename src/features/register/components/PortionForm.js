import React from 'react';
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

const PortionForm = ({
     values,
     touched,
     errors,
     isSubmitting,
     handleSubmit,
     handleChange
 }) => (
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
			<Input valid={touched.documents && !errors.documents} type="file" name="documents" id="documents" onChange={handleChange} value={values.documents}/>
			{ errors.documents && <FormText color="danger">{errors.documents}</FormText>}
		</FormGroup>
		<FormGroup tag="fieldset">
			<legend>Dati del contratto</legend>
			<FormGroup>
				<Label for="price">Prezzo</Label>
				<Input valid={touched.price && !errors.price} type="number" name="price" id="price" onChange={handleChange} value={values.price}/>
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
				<Input valid={touched.expMainActivityCost && !errors.expMainActivityCost} type="number" name="expMainActivityCost" id="expMainActivityCost" onChange={handleChange} value={values.expMainActivityCost}/>
				{ errors.expMainActivityCost && <FormText color="danger">{errors.expMainActivityCost}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="expProdActivityCost">Costi di produzione attesi</Label>
				<Input valid={touched.expProdActivityCost && !errors.expProdActivityCost} type="number" name="expMainActivityCost" id="expMainActivityCost" onChange={handleChange} value={values.expProdActivityCost}/>
				{ errors.expProdActivityCost && <FormText color="danger">{errors.expProdActivityCost}</FormText>}
			</FormGroup>
		</FormGroup>
		{/* TODO: add euro icon to number fields */}
		<StyledFilledButton type="submit" disabled={isSubmitting}>
			Aggiungi
		</StyledFilledButton>
	</Form>
);

export default PortionForm;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	Form,
	FormGroup,
	FormText,
	Input,
	Label,
	InputGroup,
	InputGroupAddon,
	Container,
	Row,
	Col,
	Alert
} from 'reactstrap';

import { faEuroSign } from '@fortawesome/free-solid-svg-icons/faEuroSign';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledFilledButton, StyledSpinner } from '../../../shared/styled';

import { fetchPortionsByOwner } from '../../../shared/utils';

/**
 * Form for registering portion contract terms.
 *
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @param initialValues
 * @param resetForm
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const ContractTermsForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
	initialValues,
	resetForm,
	userAddress
}) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		resetForm(initialValues);
	}, [resetForm, initialValues]);

	useEffect(() => {
		fetchPortionsByOwner(userAddress, setElements, setIsLoading, setFetchErrors);
	}, [userAddress, setElements, setIsLoading, setFetchErrors]);

	if (isLoading) {
		return (
			<Container fluid>
				<Row className="my-3 justify-content-center align-content-center align-items-center">
					<Col xl="auto" sm="auto">
						<StyledSpinner size="large"/>
					</Col>
				</Row>
			</Container>
		)
	}

	if (fetchErrors) {
		return (
			<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento delle porzioni di terreno</Alert>
		);
	}

	if (!elements.length) {
		return (
			<Alert color="info" className="my-3">Nessuna porzione di terreno disponibile per il trasferimento di proprietà o per la vendita</Alert>
		);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup>
				<Label for="portion">Porzione relativa</Label>
				<Input valid={touched.portion && !errors.portion} type="select" name="portion" id="portion" onChange={handleChange} value={values.portion} disabled={isSubmitting}>
					<option value="" />
					{elements.map((element, index) => <option key={index} value={element.id}>{element.description}</option>)}
				</Input>
				{errors.portion && <FormText color="danger">{errors.portion}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="address">Address acquirente</Label>
				<Input valid={touched.address && !errors.address} type="text" name="address" id="address" placeholder="0xa1b2c3d4e5f6..." onChange={handleChange} value={values.address} disabled={isSubmitting}/>
				{errors.address && <FormText color="danger">{errors.address}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="price">Prezzo</Label>
				<InputGroup>
					<InputGroupAddon addonType="prepend" className="align-items-center mx-3">
						<FontAwesomeIcon icon={faEuroSign} size="lg"/>
					</InputGroupAddon>
					<Input valid={touched.price && !errors.price} type="number" name="price" id="price" onChange={handleChange} value={values.price} disabled={isSubmitting}/>
				</InputGroup>
				{errors.price && <FormText color="danger">{errors.price}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="duration">Durata</Label>
				<Input valid={touched.duration && !errors.duration} type="number" name="duration" id="duration" onChange={handleChange} value={values.duration} disabled={isSubmitting}/>
				<FormText>Inserire 0 se perpetuo, altrimenti indicare il numero di anni</FormText>
				{errors.duration && <FormText color="danger">{errors.duration}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="expectedProduction">Produzione attesa</Label>
				<Input valid={touched.expectedProduction && !errors.expectedProduction} type="text" name="expectedProduction" id="expectedProduction" onChange={handleChange} value={values.expectedProduction} disabled={isSubmitting}/>
				{errors.expectedProduction && <FormText color="danger">{errors.expectedProduction}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="periodicity">Periodicità</Label>
				<Input valid={touched.periodicity && !errors.periodicity} type="text" name="periodicity" id="periodicity" onChange={handleChange} value={values.periodicity} disabled={isSubmitting}/>
				<FormText>Ogni estate, ...</FormText>
				{errors.periodicity && <FormText color="danger">{errors.periodicity}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="expMainActivityCost">Costi di manutenzione attesi</Label>
				<InputGroup>
					<InputGroupAddon addonType="prepend" className="align-items-center mx-3">
						<FontAwesomeIcon icon={faEuroSign} size="lg"/>
					</InputGroupAddon>
					<Input valid={touched.expMainActivityCost && !errors.expMainActivityCost} type="number" name="expMainActivityCost" id="expMainActivityCost" onChange={handleChange} value={values.expMainActivityCost} disabled={isSubmitting}/>
				</InputGroup>
				{errors.expMainActivityCost && <FormText color="danger">{errors.expMainActivityCost}</FormText>}
			</FormGroup>
			<FormGroup>
				<Label for="expProdActivityCost">Costi di produzione attesi</Label>
				<InputGroup>
					<InputGroupAddon addonType="prepend" className="align-items-center mx-3">
						<FontAwesomeIcon icon={faEuroSign} size="lg"/>
					</InputGroupAddon>
					<Input valid={touched.expProdActivityCost && !errors.expProdActivityCost} type="number" name="expProdActivityCost" id="expProdActivityCost" onChange={handleChange} value={values.expProdActivityCost} disabled={isSubmitting}/>
				</InputGroup>
				{errors.expProdActivityCost && <FormText color="danger">{errors.expProdActivityCost}</FormText>}
			</FormGroup>
			<StyledFilledButton type="submit" disabled={isSubmitting}>
				Aggiungi
			</StyledFilledButton>
		</Form>
	);
};

ContractTermsForm.propTypes = {
	/**
	 * Form values
	 */
	values: PropTypes.object,
	/**
	 * Touched fields
	 */
	touched: PropTypes.object,
	/**
	 * Errors in fields
	 */
	errors: PropTypes.object,
	/**
	 * Form submission
	 */
	isSubmitting: PropTypes.bool,
	/**
	 * Form submission handling
	 */
	handleSubmit: PropTypes.func,
	/**
	 * Field changes handling
	 */
	handleChange: PropTypes.func,
	/**
	 * Current user's address
	 */
	userAddress: PropTypes.string
}

export default ContractTermsForm;

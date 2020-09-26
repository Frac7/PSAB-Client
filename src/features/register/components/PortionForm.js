import React, { useEffect, useState } from 'react';
import { Form, FormGroup, FormText, Input, Label, Alert, Container, Row, Col } from 'reactstrap';

import DocumentField from './DocumentField';
import { StyledFilledButton, StyledSpinner } from '../../../shared/styled';

import contracts from '../../../shared/contracts';
import { LAND } from '../../../shared/values';

const PortionForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
	setFieldValue,
	userAddress
}) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const elements = [];

		const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);
		landInstance.methods.getByOwner(userAddress)
			.call({ from : userAddress })
			.then((lands) => {
				console.log(lands);
				if (!lands.landsOwned.length) {
					setElements(elements);
					setIsLoading(false);
					return;
				}

				lands.landsOwned.forEach((id, index) => {
					landInstance.methods.getById(id)
						.call({ from: userAddress })
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (index === lands.landsOwned.length - 1) {
								setElements(elements);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				});
			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	}, [userAddress]);

	if (isLoading) {
		return (
			<Container fluid>
				<Row className="justify-content-center align-content-center align-items-center">
					<Col md={1} sm={1}>
						<StyledSpinner size="large"/>
					</Col>
				</Row>
			</Container>
		)
	}

	if (fetchErrors) {
		return (
			<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento dei terreni</Alert>
		);
	}

	if (elements.length === 0) {
		return (
			<Alert color="danger" className="my-3">Nessun terreno disponibile per la suddivisione</Alert>
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

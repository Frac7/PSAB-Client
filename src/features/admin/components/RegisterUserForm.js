import React from 'react';

import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import { StyledFilledButton } from '../../../shared/styled';

const RegisterUserForm = ({
	values,
	touched,
	errors,
	isSubmitting,
	handleSubmit,
	handleChange
}) => (
	<Form onSubmit={handleSubmit} noValidate>
		<FormGroup>
			<Label for="username">Nome</Label>
			<Input valid={touched.name && !errors.name} type="text" name="name" id="name" onChange={handleChange} value={values.name}/>
			{ errors.name && <FormText color="danger">{errors.name}</FormText>}
		</FormGroup>
		<FormGroup>
			<Label for="address">Address</Label>
			<Input valid={touched.address && !errors.address} type="text" name="address" id="address" placeholder="0xa1b2c3d4e5f6..." onChange={handleChange} value={values.address}/>
			{ errors.address && <FormText color="danger">{errors.address}</FormText>}
		</FormGroup>
		<FormGroup>
			<Label for="email">E-mail</Label>
			<Input valid={touched.email && !errors.email} type="email" name="email" id="email" placeholder="user@example.com" onChange={handleChange} value={values.email}/>
			{ errors.email && <FormText color="danger">{errors.email}</FormText>}
		</FormGroup>
		<FormGroup>
			<Label for="password">Password</Label>
			<Input valid={touched.email && !errors.password} type="password" name="password" id="password" onChange={handleChange} value={values.password}/>
			<FormText>Almeno 8 caratteri, lettere maiuscole, lettere minuscole, caratteri speciali, numeri</FormText>
			{ errors.password && <FormText color="danger">{errors.password}</FormText>}
		</FormGroup>
		<FormGroup>
			<Label for="confirmPassword">Conferma password</Label>
			<Input valid={touched.email && !errors.confirmPassword} type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange} value={values.confirmPassword}/>
			{ errors.confirmPassword && <FormText color="danger">{errors.confirmPassword}</FormText>}
		</FormGroup>
		<StyledFilledButton type="submit" disabled={isSubmitting}>
			Aggiungi
		</StyledFilledButton>
	</Form>
);

export default RegisterUserForm;

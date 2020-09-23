import React from 'react';

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

const SignInForm = ({
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange
}) => (
    <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
            <Label for="email">E-mail</Label>
            <Input valid={touched.email && !errors.email} type="email" name="email" id="email" placeholder="user@example.com" onChange={handleChange} value={values.email}/>
            { errors.email && <FormText color="danger">{errors.email}</FormText>}
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input valid={touched.email && !errors.password} type="password" name="password" id="password" onChange={handleChange} value={values.password}/>
            { errors.password && <FormText color="danger">{errors.password}</FormText>}
        </FormGroup>
        <StyledFilledButton type="submit" disabled={isSubmitting}>
            Accedi
        </StyledFilledButton>
    </Form>
)

export default SignInForm;

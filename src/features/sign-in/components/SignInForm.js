import React from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { StyledFilledButton } from '../../../shared/styled';

/**
 * Login form.
 *
 * @param values
 * @param touched
 * @param errors
 * @param isSubmitting
 * @param handleSubmit
 * @param handleChange
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
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
            <Label for="address">Address</Label>
            <Input valid={touched.address && !errors.address} type="text" name="address" id="address" placeholder="0xa1b2c3d4e5f6..." onChange={handleChange} value={values.address}/>
            {errors.address && <FormText color="danger">{errors.address}</FormText>}
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input valid={touched.password && !errors.password} type="password" name="password" id="password" onChange={handleChange} value={values.password}/>
            {errors.password && <FormText color="danger">{errors.password}</FormText>}
        </FormGroup>
        <StyledFilledButton type="submit" disabled={isSubmitting}>
            Accedi
        </StyledFilledButton>
    </Form>
);

SignInForm.propTypes = {
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
    handleChange: PropTypes.func
}

export default SignInForm;

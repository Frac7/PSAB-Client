import React, { useMemo, useCallback } from 'react';

import { string, object } from 'yup';
import { Formik } from 'formik';
import { Row, Col } from 'reactstrap';

import SignInForm from '../components';

const SignIn = () => {
    const initialValues = useMemo(() => ({ 
        email: '', 
        password: '' 
    }), []);
    const validationSchema = useMemo(() => 
        object().shape(({ 
            email: string().email('E-mail non valida').required('Inserire l\'e-mail'), 
            password: string().required('Inserire la password') 
        })), []);
    const onSubmit = useCallback((values, { setSubmitting, setErrors }) => {
        console.log(values);
        setTimeout(() => setSubmitting(false), 1500);
    }, []);

    return (
        <Row>
            <Col md={{ size: 6, offset: 3 }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {props => <SignInForm {...props}/>}
                </Formik>
            </Col>
        </Row>
    );
}

export default SignIn;

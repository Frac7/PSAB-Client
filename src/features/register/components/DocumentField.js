import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormText, Input, Row, Col, Label } from 'reactstrap';

/**
 * Custom field for handling document upload.
 *
 * @param touched
 * @param errors
 * @param setFieldValue
 * @param isSubmitting
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const DocumentField = ({
	touched,
	errors,
	setFieldValue,
	isSubmitting
}) => {
	const handleFileChange = useCallback((event) => {
		event.persist();

		if (event.currentTarget.files && event.currentTarget.files.length) {
			setFieldValue('documents', event.currentTarget.files[0]);
		} else {
			setFieldValue(null);
		}
	}, [setFieldValue]);

	return (
		<>
		<Label for="documents">Documenti</Label>
		<FormText>Il documento è obbligatorio</FormText>
		<Row className="my-3" form>
			<Col>
				<Input valid={touched.documents && errors.documents} type="file" name="documents" id="documents" onChange={handleFileChange} disabled={isSubmitting}/>
				{errors.documents && <FormText color="danger">{errors.documents}</FormText>}
			</Col>
		</Row>
		</>
	);
};

DocumentField.propTypes = {
	/**
	 * Touched fields
	 */
	touched: PropTypes.object,
	/**
	 * Errors in fields
	 */
	errors: PropTypes.object,
	/**
	 * Field changes handling
	 */
	setFieldValue: PropTypes.func,
	/**
	 * Form submission flag
	 */
	isSubmitting: PropTypes.bool
};

export default DocumentField;

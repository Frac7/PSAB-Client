import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormText, Input, Row, Col, Label } from 'reactstrap';

import createDocumentName from '../utils';

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

		const files = event.currentTarget.files;
		if (files && files.length) {
			const file = files[0];

			const reader = new FileReader();
			reader.addEventListener('load', () => {
				const base64 = reader.result;

				setFieldValue('document', {
					file: file,
					name: createDocumentName(file.name),
					base64
				});
			});
			reader.readAsDataURL(file);
		} else {
			setFieldValue('document', {});
		}
	}, [setFieldValue]);

	return (
		<>
		<Label for="documents">Documenti</Label>
		<Row className="my-3" form>
			<Col xl={12} xs={12}>
				<Input
					valid={touched.documents && errors.documents}
					type="file"
					name="document"
					id="document"
					onChange={handleFileChange}
					disabled={isSubmitting}
				/>
				{(errors.documents && (errors.documents.name || errors.documents.file)) && (
					<FormText color="danger">{errors.documents.name || errors.documents.file || errors.documents.base64}</FormText>
				)}
			</Col>
			<Col>
				<FormText>Il documento è obbligatorio, dimensione massima: 500 KB</FormText>
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

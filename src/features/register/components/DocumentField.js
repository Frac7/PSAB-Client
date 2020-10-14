import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormText, Input, Row, Col } from 'reactstrap';

/**
 * Custom field for handling document upload.
 *
 * @param touched
 * @param errors
 * @param setFieldValue
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const DocumentField = ({
	touched,
	errors,
	setFieldValue
}) => {
	const handleFileChange = useCallback((event) => {
		event.persist();

		const documents = [];
		if (event.currentTarget.files && event.currentTarget.files.length) {
			documents.push(event.currentTarget.files[0]);
			documents.push(documents[0].name);

			const reader = new FileReader();
			reader.addEventListener('load', () => {
				documents.push(reader.result);
			});
			reader.readAsDataURL(documents[0]);
		}

		setFieldValue('documents', documents);
	}, [setFieldValue]);

	return (
		<Row className="my-3" form>
			<Col>
				<Input valid={touched.documents && errors.documents} type="file" name="documents" id="documents" onChange={handleFileChange} />
				{ errors.documents && <FormText color="danger">{errors.documents}</FormText>}
			</Col>
		</Row>
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
	setFieldValue: PropTypes.func
};

export default DocumentField;

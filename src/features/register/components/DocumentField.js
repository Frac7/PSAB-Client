import React, { useMemo, useCallback } from 'react';
import { FormText, Input, Row, Col } from 'reactstrap';

const DocumentField = ({
	values,
	touched,
	errors,
	setFieldValue
}) => {
	const handleFileChange = useCallback((index) => (event) => {
		event.persist();

		setFieldValue(`documents[${index}]`, {
			value: event.currentTarget.files && event.currentTarget.files.length > 0 ? event.currentTarget.files[0].name : '',
			file: event.currentTarget.files && event.currentTarget.files.length > 0 ? event.currentTarget.files[0] : null
		});
	}, [setFieldValue, values.documents]);

	const fields = useMemo(() => {
		const fields = [];
		for (let i = 0; i < values.documents.length + 1; i++) {
			fields.push(
				<Row className="my-3" form key={i}>
					<Col>
						<Input valid={touched.documents && touched.documents[i] && (errors.documents && !errors.documents[i])} type="file" name={`documents[${i}]`} id={`documents[${i}]`} onChange={handleFileChange(i)} />
					</Col>
				</Row>
			)
		}
		return fields;
	}, [touched, errors, handleFileChange]);

	return (
		<>
			{fields}
			{ errors.documents && <FormText color="danger">{errors.documents}</FormText>}
		</>
	);
}

export default DocumentField;

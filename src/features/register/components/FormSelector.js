import React, { useState, useCallback, useMemo } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import * as values from '../values';

const FormSelector = ({ currentForm, setCurrentForm }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [setIsOpen]);
	const onClick = useCallback((value) => () => {
		setCurrentForm(value);
	}, [setCurrentForm]);

	const choices = useMemo(() => {
		return Object.keys(values).map((value, index) =>
			<DropdownItem onClick={onClick(values[value])} key={index}>{values[value]}</DropdownItem>
		)
	}, []);

	return (
		<Dropdown
			isOpen={isOpen}
			toggle={toggle}
		>
			<DropdownToggle caret block>
				{currentForm}
			</DropdownToggle>
			<DropdownMenu>
				{choices}
			</DropdownMenu>
		</Dropdown>
	)
};

export default FormSelector;

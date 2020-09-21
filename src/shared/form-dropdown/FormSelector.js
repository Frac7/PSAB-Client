import React, { useState, useCallback, useMemo } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FormSelector = ({ forms, currentForm, setCurrentForm }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [setIsOpen]);
	const onClick = useCallback((value) => () => {
		setCurrentForm(value);
	}, [setCurrentForm]);

	const choices = useMemo(() => {
		return Object.keys(forms).map((value, index) =>
			<DropdownItem onClick={onClick(forms[value])} key={index}>{forms[value]}</DropdownItem>
		)
	}, [onClick]);

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

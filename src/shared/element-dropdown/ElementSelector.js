import React, { useState, useCallback, useMemo } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ElementSelector = ({ elements, currentElement, setCurrentElement }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [setIsOpen]);
	const onClick = useCallback((value) => () => {
		setCurrentElement(value);
	}, [setCurrentElement]);

	const choices = useMemo(() => {
		return elements.map((value, index) =>
			<DropdownItem disabled={value.disabled} onClick={onClick(value.type)} key={index}>{value.type}</DropdownItem>
		)
	}, [onClick, elements]);

	return (
		<Dropdown
			isOpen={isOpen}
			toggle={toggle}
		>
			<DropdownToggle caret block>
				{currentElement}
			</DropdownToggle>
			<DropdownMenu>
				{choices}
			</DropdownMenu>
		</Dropdown>
	)
};

export default ElementSelector;

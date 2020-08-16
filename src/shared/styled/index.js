import styled from 'styled-components';

import { Navbar, Button, Spinner } from 'reactstrap';

const StyledNavbar = styled(Navbar)`
	background-color: #006D77 !important;
`

const StyledFilledButton = styled(Button)`
	background-color: #006D77 !important;

	&:hover {
		background-color: #005059 !important;
	}

	&:active {
		background-color: #005059 !important;
	}

	&:focus {
		background-color: #005059 !important;
	}
`

const StyledSpinner = styled(Spinner)`
	color: #006D77;
`

export { StyledNavbar, StyledFilledButton, StyledSpinner };

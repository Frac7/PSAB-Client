import React from 'react';
import { useLocation } from 'react-router-dom';

import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

import { StyledNavbar } from '../../styled';

import { menu } from '../data';
import { PROFILE } from '../../../config/routes';

const Header = () => {
	const { pathname } = useLocation();

	return (
		<header>
			<StyledNavbar dark expand>
				<Nav navbar style={{ width: '100%' }}>
					<Container fluid>
						<Row md={4} style={{ width: '100%' }}>
							{ menu.map(({ route, label }, index) =>
								<Col md={{ size: 2, offset: index ? 0 : 2 }} key={index}>
									<NavItem active={pathname === route}>
										<NavLink href={route}>{label}</NavLink>
									</NavItem>
								</Col>
							)}
							<Col md={{ size: 2, offset: 2 }}>
								<NavItem>
									<NavLink active={pathname === PROFILE} href={PROFILE}>
										<FontAwesomeIcon icon={faUser} color="inherit" size="lg" />
									</NavLink>
								</NavItem>
							</Col>
						</Row>
					</Container>
				</Nav>
			</StyledNavbar>
		</header>
	)
}

export default Header;

import React from 'react';

import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

import { StyledNavbar } from '../../styled';

import { menu } from '../data';
import { PROFILE } from '../../../config/routes';

const Header = () => {
	return (
		<header>
			<StyledNavbar dark expand>
				<Nav navbar style={{ width: '100%' }}>
					<Container fluid>
						<Row md={4} style={{ width: '100%' }}>
							{ menu.map((item, index) =>
								<Col md={{ size: 2, offset: index ? 0 : 2 }} key={index}>
									<NavItem active={false}>
										<NavLink href={item.route}>{item.label}</NavLink>
									</NavItem>
								</Col>
							)}
							<Col md={{ size: 2, offset: 2 }}>
								<NavItem>
									<NavLink href={PROFILE}>
										<FontAwesomeIcon icon={faUser} color="white" size="lg" />
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

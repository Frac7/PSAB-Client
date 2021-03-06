import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';

import { StyledNavbar } from '../../styled';

import { menu } from '../data';
import { ADMIN, PROFILE, SIGNOUT } from '../../../config/routes';
import { Selector } from '../../../store/user/reducer';
import { roles } from '../../values';

const Header = ({ user }) => {
	const { pathname } = useLocation();

	const [isAdmin, setIsAdmin] = useState(false);
	useEffect(() => {
		if (user.data) {
			setIsAdmin(Boolean(parseInt(user.data.attributes['custom:is_admin'])));
		}
	}, [user]);

	return (
		<header>
			{user.data && (
			<StyledNavbar dark expand>
				<Nav navbar style={{ width: '100%' }}>
					<Container fluid>
						<Row style={{ width: '100%' }} className="justify-content-center">
								{!isAdmin && menu.map(({ route, label, allowed }, index) => {
									if (allowed.includes(roles[parseInt(user.data.attributes['custom:role'])])) {
										return <Col lg={1} md={2} key={index}>
											<NavItem active={pathname === route}>
												<Link component={NavLink} to={route}>{label}</Link>
											</NavItem>
										</Col>
									}
									return null;
								})}
								{isAdmin && (
									<Col lg={2} md={3}>
										<NavItem active={pathname === ADMIN}>
											<Link component={NavLink} to={ADMIN}>
												Aggiungi Utente
											</Link>
										</NavItem>
									</Col>)}
								<Col align="center" lg={{ size: 1, offset: isAdmin ? 0 : 1 }} md={{ size: 1, offset: isAdmin ? 0 : 3 }}>
									<NavItem active={pathname === PROFILE}>
										<Link component={NavLink} to={PROFILE}>
											<FontAwesomeIcon icon={faUser} color="inherit" size="lg" />
										</Link>
									</NavItem>
								</Col>
								<Col align="center" lg={1} md={1}>
									<NavItem active={pathname === SIGNOUT}>
										<Link component={NavLink} to={SIGNOUT}>
											<FontAwesomeIcon icon={faSignOutAlt} color="inherit" size="lg" />
										</Link>
									</NavItem>
								</Col>
						</Row>
					</Container>
				</Nav>
			</StyledNavbar>)}
		</header>
	)
}

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(Header);

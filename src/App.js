import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

import { StyledSpinner } from './shared/styled';

import routes from './config/routes';

const App = () => (
	<Container fluid style={{ margin: '2rem 0' }}>
		<Row className="justify-content-center">
			<Col xl={6} sm={10}>
				<Suspense fallback={
					<Container fluid>
						<Row className="justify-content-center align-content-center align-items-center">
							<Col xl={1} sm={1}>
								<StyledSpinner size="large"/>
							</Col>
						</Row>
					</Container>
					}>
					<Switch>
						{ routes.map(({ path, component }, index) =>
							<Route key={index} path={path} component={component}>
							</Route>
						)}
						<Route exact path="/" component={routes[0].component} />
					</Switch>
				</Suspense>
			</Col>
		</Row>
	</Container>
);

export default App;

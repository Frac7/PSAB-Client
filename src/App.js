import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, Row, Col, Spinner } from 'reactstrap';

import routes from './config/routes';

const App = () => {
	return (
		<Container fluid style={{ margin: '2rem 0' }}>
			<Row className="justify-content-center">
				<Col md={8}>
					<Suspense fallback={<Spinner color="success" size="large"/>}>
						<Switch>
							{ routes.map(({ path, component }, index) =>
								<Route key={index} path={path} component={component}>
								</Route>
							)}
						</Switch>
					</Suspense>
				</Col>
			</Row>
		</Container>
	)
}

export default App;

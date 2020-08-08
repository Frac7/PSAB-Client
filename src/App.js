import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

import routes from './config/routes';

const App = () => {
	return (
		<Container fluid style={{ margin: '2rem 0' }}>
			<Row className="justify-content-center">
				<Col md={8}>
					<Switch>
						{ routes.map(({ path, component }, index) =>
							<Route key={index} path={path}>
								{component}
							</Route>
						)}
					</Switch>
				</Col>
			</Row>
		</Container>
	)
}

export default App;

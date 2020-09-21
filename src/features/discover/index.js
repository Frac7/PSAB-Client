import React from 'react';

import DiscoverContainer from './containers';
import withAuthentication from '../../shared/auth';

const Discover = () => <DiscoverContainer />;

export default withAuthentication(Discover);

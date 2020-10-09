import React from 'react';

import DiscoverContainer from './containers';
import { DISCOVER } from '../../config/routes';
import withAuthentication from '../../shared/auth';

const Discover = () => <DiscoverContainer />;

export default withAuthentication(Discover, DISCOVER);

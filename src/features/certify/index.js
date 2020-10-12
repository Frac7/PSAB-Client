import CertifyFormContainer from './containers';
import { CERTIFY } from '../../config/routes';

import withAuthentication from '../../shared/auth';
import withWallet from '../../shared/wallet';

const Certify = withWallet(CertifyFormContainer);

export default withAuthentication(Certify, CERTIFY);

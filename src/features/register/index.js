import RegisterFormContainer from './containers';
import { REGISTER } from '../../config/routes';

import withAuthentication from '../../shared/auth';
import withWallet from '../../shared/wallet';

const Register = withWallet(RegisterFormContainer);

export default withAuthentication(Register, REGISTER);

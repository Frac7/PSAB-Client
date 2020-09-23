import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

import aws_exports from '../../aws-exports';

const configureAwsAmplify = () => {
	Auth.configure(aws_exports);
	Storage.configure(aws_exports);
}

export default configureAwsAmplify;

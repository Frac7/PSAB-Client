import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

import aws_exports from '../../aws-exports';

const configureAwsAmplify = () => {
	// Auth.configure({
	// 	identityPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
	// 	region: process.env.REACT_APP_REGION
	// });

	Auth.configure(aws_exports);

	// Storage.configure({
	// 	bucket: process.env.REACT_APP_BUCKET_NAME,
	// 	region: process.env.REACT_APP_REGION
	// });

	Storage.configure(aws_exports);
}

export default configureAwsAmplify;

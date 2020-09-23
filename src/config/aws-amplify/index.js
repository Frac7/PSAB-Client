import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

const configureAwsAmplify = () => {
	Auth.configure({
		identityPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
		region: process.env.REACT_APP_REGION
	});

	Storage.configure({
		bucket: process.env.REACT_APP_BUCKET_NAME,
		region: process.env.REACT_APP_REGION
	});
}

export default configureAwsAmplify;

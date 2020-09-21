const config = {
	bucketName: 'psab-documents',
	region: 'us-east-1',
	accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
	secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
	s3Url: 'https://psab-documents.s3.amazonaws.com/'
}

export default config;

import { Auth } from '@aws-amplify/auth';

const credentials = () =>
	Auth.currentSession();

const getUserRole = (username, idToken) =>
	fetch(`https://titw7cpmu7.execute-api.us-east-1.amazonaws.com/dev/get-user-role?username=${username}`, {
		headers: {
			Authorization: idToken
		}
	})
		.then((result) => result.json());

const signIn = (address, password) => Auth.signIn(address, password)
	.then((result) => {
		return { result };
	})
	.catch((error) => {
		return { error };
	});

const signOut = () => Auth.signOut();

const currentUserInfo = () => Auth.currentUserInfo()
	.then((result) => {
		return { result };
	})
	.catch((error) => {
		return { error };
	});

export {
	credentials,
	getUserRole,
	signIn,
	signOut,
	currentUserInfo
}

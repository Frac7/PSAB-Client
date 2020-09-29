import { Auth } from '@aws-amplify/auth';

const signIn = (email, password) => Auth.signIn(email, password)
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
	signIn,
	signOut,
	currentUserInfo
}

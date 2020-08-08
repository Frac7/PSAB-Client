import Profile from '../../features/profile';
import Admin from '../../features/admin';
import Discover from '../../features/discover';
import Certify from '../../features/certify';
import Register from '../../features/register';
import SignIn from '../../features/sign-in';
import SignOut from '../../features/sign-out';

const PROFILE = '/profile';
const REGISTER = '/register';
const CERTIFY = '/certify';
const DISCOVER = '/discover';
const SIGNIN = '/sign-in';
const SIGNOUT = 'sign-out';
const ADMIN = '/admin'

const routes = [
	{
		path: PROFILE,
		component: Profile
	},
	{
		path: REGISTER,
		component: Register
	},
	{
		path: CERTIFY,
		component: Certify
	},
	{
		path: DISCOVER,
		component: Discover
	},
	{
		path: SIGNIN,
		component: SignIn
	},
	{
		path: SIGNOUT,
		component: SignOut
	},
	{
		path: ADMIN,
		component: Admin
	}
];

export default routes;

export { PROFILE, REGISTER, CERTIFY, DISCOVER, SIGNOUT, ADMIN, SIGNIN };

import { lazy } from 'react';

const Profile =  lazy(() => import('../../features/profile'));
const Admin =  lazy(() => import('../../features/admin'));
const Discover =  lazy(() => import('../../features/discover'));
const Certify =  lazy(() => import('../../features/certify'));
const Register =  lazy(() => import('../../features/register'));
const SignIn =  lazy(() => import('../../features/sign-in'));
const SignOut =  lazy(() => import('../../features/sign-out'));

const PROFILE = '/profile';
const REGISTER = '/register';
const CERTIFY = '/certify';
const DISCOVER = '/discover';
const SIGNIN = '/sign-in';
const SIGNOUT = '/sign-out';
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

import { REGISTER, CERTIFY, DISCOVER } from '../../../config/routes';
import { CERTIFIER, OPERATOR, USER } from '../../values';

const menu = [
	{
		route: REGISTER,
		label:'Registra',
		allowed: [ OPERATOR, USER ]
	},
	{
		route: CERTIFY,
		label: 'Certifica',
		allowed: [ CERTIFIER ]
	},
	{
		route: DISCOVER,
		label: 'Esplora',
		allowed: [ OPERATOR, CERTIFIER, USER ]
	}
]

export { menu };

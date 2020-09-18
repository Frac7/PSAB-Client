import React, { useEffect, useState } from 'react';

import { Table } from 'reactstrap';

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// get users API...
		// set users...
	}, []);

	return (
		<Table responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>Nome</th>
					<th>Username</th>
					<th>E-mail</th>
					<th>Address</th>
					<th>Azioni</th>
				</tr>
			</thead>
			<tbody>
			{users.map((user, index) => (
				<>
					<th scope="row">{index}</th>
					<td>{user.name}</td>
					<td>{user['cognito:username']}</td>
					<td>{user.email}</td>
					<td>{user['custom:eth_address']}</td>
					<td></td>
				</>
			))}
			</tbody>
		</Table>
	)
};

export default UserList;

import React from 'react';
import UserList from '../components/UserList';

const Home = ({ users, onDeleteUser }) => {
	return (
		<div>
			<h2>Liste des Utilisateurs</h2>
			<UserList users={users} onDeleteUser={onDeleteUser} />
		</div>
	);
};

export default Home;

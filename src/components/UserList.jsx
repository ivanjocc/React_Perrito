import React from 'react';
import User from './User';

const UserList = ({ users, onDeleteUser }) => {
	return (
		<div>
			<h2>Liste des Utilisateurs</h2>
			{users.length === 0 ? (
				<p>Aucun utilisateur à afficher pour le moment.</p>
			) : (
				<div className="user-list">
					{users.map((user) => (
						<User key={user.id} user={user} onDeleteUser={onDeleteUser} />
					))}
				</div>
			)}
		</div>
	);
};

export default UserList;

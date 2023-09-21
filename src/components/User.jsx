import React from 'react';

const User = ({ user, onDeleteUser }) => {
	return (
		<div className="user">
			<h3>{user.fullName}</h3>
			<p>Email : {user.email}</p>
			<p>Téléphone : {user.phoneNumber}</p>
			<p>Adresse : {user.address}</p>
			<button onClick={() => onDeleteUser(user)}>Supprimer</button>
		</div>
	);
};

export default User;

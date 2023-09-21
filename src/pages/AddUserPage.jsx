import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
	const [user, setUser] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		address: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const validateForm = () => {
		const newErrors = {};

		if (!user.fullName) {
			newErrors.fullName = 'Le nom complet est requis.';
		}

		// Validation de base du format de l'adresse e-mail.
		if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
			newErrors.email = 'L\'adresse e-mail n\'est pas valide.';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			onAddUser(user);
			setUser({
				fullName: '',
				email: '',
				phoneNumber: '',
				address: '',
			});
		}
	};

	return (
		<div>
			<h2>Ajouter un Utilisateur</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="fullName">Nom Complet :</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={user.fullName}
						onChange={handleChange}
					/>
					{errors.fullName && <p>{errors.fullName}</p>}
				</div>
				<div>
					<label htmlFor="email">Adresse E-mail :</label>
					<input
						type="text"
						id="email"
						name="email"
						value={user.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div>
					<label htmlFor="phoneNumber">Numéro de Téléphone :</label>
					<input
						type="text"
						id="phoneNumber"
						name="phoneNumber"
						value={user.phoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="address">Adresse :</label>
					<textarea
						id="address"
						name="address"
						value={user.address}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Ajouter l'Utilisateur</button>
			</form>
		</div>
	);
};

export default AddUserForm;

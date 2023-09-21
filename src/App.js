import React, { useState } from 'react';
import './App.css';
import Home from '../src/pages/Home';
import AddUserPage from '../src/pages/AddUserPage';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {

    setUsers([...users, user]);
  };

  const deleteUser = (userToDelete) => {

    const updatedUsers = users.filter((user) => user !== userToDelete);
    setUsers(updatedUsers);
  };

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <button onClick={() => window.location.reload()}>Accueil</button>
          </li>
          <li>
            <button onClick={() => addUser({ fullName: 'Nouvel utilisateur' })}>Ajouter un Utilisateur</button>
          </li>
        </ul>
      </nav>

      <h1>Application de Gestion des Utilisateurs</h1>

      <Home users={users} onDeleteUser={deleteUser} />
      <AddUserPage onAddUser={addUser} />
    </div>
  );
};

export default App;

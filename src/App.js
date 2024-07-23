import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(function() {
    axios.get('https://my-json-server.typicode.com/ThrasyvoulosKafasis/epignosis-users/users')
      .then(function(response) {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
      
  }, []);


  function handleUserSelect(user){
    setSelectedUser(user);
  }


  function handleUserUpdate(updatedUser){
    axios.put(`https://my-json-server.typicode.com/ThrasyvoulosKafasis/epignosis-users/users/${updatedUser.id}`, updatedUser)
    .then(response => {
      setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    })
    .catch(error => {
      console.error('Error updating user:', error);
    });
  }

  return (
    <div className="app">
      <UserList users={users} loading={loading} onSelect={handleUserSelect} />
      <UserForm user={selectedUser} onSave={handleUserUpdate} />
    </div>
  );
}

export default App;

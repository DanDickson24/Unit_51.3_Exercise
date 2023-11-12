import React, { useEffect, useState } from 'react';
import { List, ListItem, Typography } from '@mui/material';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        if (response.ok) {
          const fetchedUsers = await response.json();
          setUsers(fetchedUsers);
        } else {
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchUsers();
  }, []);
  
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Page
      </Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            {user.name} - {user.email}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Admin;

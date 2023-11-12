import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email: email }; 
  
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
  
      if (response.ok) {
        setEmail(''); 
      } else {
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Yodlr Registration Portal
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

function HomePage() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Yodlr Design Challenge
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/signup">
          Registration Page
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/admin" style={{ marginLeft: '10px' }}>
          Admin Page
        </Button>
      </div>
    );
  }
  
  export default HomePage;

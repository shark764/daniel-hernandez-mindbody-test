import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

const validUsername = 'daniel@gmail.com';
const validPassword = '12345678ag';

const validate = (username = '', password = '') => {
  if (username.length === 0) {
    return false;
  }
  if (password.length === 0) {
    return false;
  }
  if (!(username === validUsername && password === validPassword)) {
    return false;
  }
  return true;
};

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsValid(validate(username, password));
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {!isValid && (
          <Alert severity="error">Username or password are invalid</Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <Grid item xs={12}>
                <TextField
                  id="username"
                  label="Email or username"
                  variant="standard"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item cx={12}>
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  variant="standard"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="plain">Forgot your password?</Button>
              </Grid>
              <Grid item cx={12}>
                <Button type="submit" fullWidth>
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;

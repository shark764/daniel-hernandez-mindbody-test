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

const customLogger = console;
// const customLogger = window.desktop?.logger || console;

const logOptions = ['log', 'warn', 'error', 'debug', 'info', 'table'];

const logger2 = {};
logOptions.forEach((logOption) => {
  logger2[logOption] = (message, ...args) =>
    customLogger[logOption](`[commland-phone-workspace] ${message}`, ...args);
});

const logger = logOptions.reduce((previousLogger, logOption) => {
  return {
    ...previousLogger,
    [logOption]: (message, ...args) =>
      customLogger[logOption](`[commland-phone-workspace] ${message}`, ...args),
  };
}, {});

logger.info('hey you', 1 + 3, 4 * 8);
logger.table([{ a: 1 + 3, b: 4 * 8 }]);
logger.table({ a: 1 + 3, b: 4 * 8, x: 9, y: 8, z: 0 });
console.table({ a: 1 + 3, b: 4 * 8, x: 9, y: 8, z: 0 });
logger.table('hey you', { a: 1 + 3, b: 4 * 8 });
// real log
console.table([
  { a: 1 + 3, b: 4 * 8 },
  { a: 1 + 3, b: 4 * 9, c: 9 + 78 },
]);
console.table('hey you', { a: 1 + 3, b: 4 * 8 });
console.table(['hey you', { a: 1 + 3, b: 4 * 8 }]);
logOptions.forEach((logOption) => {
  logger[logOption]('hey you there!!!', logOption, { a: 1 + 3, b: 4 * 8 });
});
console.error('hey there', { a: 1 + 3, b: 4 * 8 });
console.info('hey there', { a: 1 + 3, b: 4 * 8 });
console.table([
  'hey you is a table',
  { a: 1 + 3, b: 4 * 8 },
  { a: 1 + 3, b: 4 * 8, x: 9, y: 8, z: 0 },
]);

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

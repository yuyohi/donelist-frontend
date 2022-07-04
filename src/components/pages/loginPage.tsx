import { FC } from 'react';
import Box from '@mui/material/Box';
import LoginForm from 'components/organisms/loginForm';

const LoginPage: FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <LoginForm />
  </Box>
);

export default LoginPage;

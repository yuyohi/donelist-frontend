import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Form from 'components/molecules/form';

type LoginFormProps = {
  handleIDChange?: () => void;
  handlePasswordChange?: () => void;
  handleLoginButton?: () => void;
  ID?: string;
  Password?: string;
};

const LoginForm: FC<LoginFormProps> = ({
  handleIDChange = () => undefined,
  handlePasswordChange = () => undefined,
  handleLoginButton = () => undefined,
  ID = '',
  Password = '',
}) => (
  <Card sx={{ width: { xs: '80%', sm: '50%', lg: '20%', xl: '15%' } }}>
    <CardContent>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Form formName="ID" handleChange={handleIDChange} value={ID} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Form
            formName="パスワード"
            handleChange={handlePasswordChange}
            value={Password}
          />
        </Box>
      </Stack>
      <Box sx={{ mt: 3, display: 'flex' }}>
        <div style={{ flexGrow: 1 }} />
        <Button variant="contained" onClick={handleLoginButton}>
          ログイン
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default LoginForm;

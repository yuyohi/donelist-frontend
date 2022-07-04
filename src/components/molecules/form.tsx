import { FC } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

type FormProps = {
  formName?: string;
  value?: string;
  handleChange?: () => void;
};

const Form: FC<FormProps> = ({
  formName = '',
  value = '',
  handleChange = () => undefined,
}) => (
  <Box>
    <TextField label={formName} value={value} onChange={handleChange} />
  </Box>
);

export default Form;

import { FC } from 'react';
import Box from '@mui/material/Box';
import CalenderPicker from 'components/molecules/calender';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
  },
});

const SideBar: FC = () => (
  <ThemeProvider theme={theme}>
    <Box sx={{ backgroundColor: grey[300], height: '100vh' }}>
      <CalenderPicker />
    </Box>
  </ThemeProvider>
);

export default SideBar;

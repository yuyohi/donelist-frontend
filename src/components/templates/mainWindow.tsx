import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TaskCardList from 'components/organisms/taskCardList';
import SideBar from 'components/organisms/sideBar';

const MainWindow: FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <SideBar />
    </Grid>
    <Grid item xs={9}>
      <Box sx={{ mr: 2 }}>
        <TaskCardList checkCardProps={[{ task: '宿題' }, { task: '研究' }]} />
      </Box>
    </Grid>
  </Grid>
);

export default MainWindow;

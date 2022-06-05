import { FC } from 'react';
import Grid from '@mui/material/Grid';
import TaskCardList from 'components/organisms/taskCardList';
import StaticDatePickerCalender from 'components/organisms/calender';

const MainWindow: FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <StaticDatePickerCalender />
    </Grid>
    <Grid item xs={8}>
      <TaskCardList checkCardProps={[{ task: '宿題' }, { task: '研究' }]} />
    </Grid>
  </Grid>
);

export default MainWindow;

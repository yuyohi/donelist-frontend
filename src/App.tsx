import { FC } from 'react';
import Box from '@mui/material/Box';
import './App.css';
import TaskCardList from 'components/organisms/taskCardList';

const App: FC = () => (
  <Box>
    <TaskCardList checkCardProps={[{ task: '宿題' }, { task: '研究' }]} />
  </Box>
);

export default App;

import { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { TaskCard, CheckCardProps } from 'components/molecules/taskCard';

const TaskCardList: FC<{ checkCardProps: CheckCardProps[] }> = ({
  checkCardProps,
}) => (
  <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
      {checkCardProps.map(({ task }) => (
        <TaskCard task={task} key={task} />
      ))}
    </Stack>
  </Box>
);

export default TaskCardList;

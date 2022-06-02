import { FC } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export type CheckCardProps = {
  task: string;
};

const TaskCard: FC<CheckCardProps> = ({ task }) => (
  <Card>
    <Typography variant="h4" component="h4">
      {task}
    </Typography>
  </Card>
);

export { TaskCard };

import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export type CheckCardProps = {
  task: string;
};

const TaskCard: FC<CheckCardProps> = ({ task }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h5">
        {task}
      </Typography>
    </CardContent>
  </Card>
);

export { TaskCard };

import { FC, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import ja from 'date-fns/locale/ja';

const CalenderPicker: FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <CalendarPicker
        date={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
      />
    </LocalizationProvider>
  );
};

export default CalenderPicker;

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarDropdown = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Calendar />
  );
};

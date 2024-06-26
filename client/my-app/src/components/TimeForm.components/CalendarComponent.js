import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ events, onSelectEvent, onSelectSlot }) => {
  return (
    <Calendar
      defaultDate={new Date(2023, 0, 1)}
      defaultView={Views.WEEK}
      events={events}
      localizer={localizer}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      selectable
      scrollToTime={new Date(1970, 1, 1, 6)}
      toolbar={false}
      min={new Date(1970, 1, 1, 8)}
      max={new Date(1970, 1, 1, 23)}
    />
  );
};

export default CalendarComponent;

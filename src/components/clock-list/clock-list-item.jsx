import React from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from "../shared/clock-display";
import { formatDistance } from 'date-fns';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
    const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

    if(!date) return null;
  return (
    <>
      <ClockDisplay title={clock.title} date={date} offset={offset} timezone={timezone}/>
      <h3>{formatDistance(localClock, date)}</h3>
      <ClockActions clock={clock} updateClock={updateClock} deleteClock={deleteClock}/>
    </>
  )
}

export default ClockListItem;

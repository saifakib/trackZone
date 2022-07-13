import React from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from "../shared/clock-display";
import { formatDistance } from 'date-fns';
import useTimer from '../../hooks/useTimer';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
    const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
    let timer = useTimer(date);

    if( !date || !timer ) return null;

  return (
    <>
      <ClockDisplay title={clock.title} date={timer} offset={offset} timezone={timezone}/>
      <h3>{formatDistance(localClock, timer)}</h3>
      <ClockActions clock={clock} updateClock={updateClock} deleteClock={deleteClock}/>
    </>
  )
}

export default ClockListItem;

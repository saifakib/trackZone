import React from 'react'
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ date, offset, timezone }) => {
  return (
    <>
      <h1>I am LocalClock</h1>
      <ClockDisplay title={"My Clock"} date={date} offset={offset} timezone={timezone} />
    </>
  )
}

export default LocalClock;

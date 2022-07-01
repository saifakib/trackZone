import React, { useEffect } from "react";
import ClockDisplay from "../shared/clock-display";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";

const LocalClock = ({ clock, updateClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  console.log(clock);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <>
      <h1>I am LocalClock</h1>
      {date && (
        <ClockDisplay
          title={clock.title}
          date={date}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockActions local={true} clock={clock} updateClock={updateClock}/>
    </>
  );
};

export default LocalClock;

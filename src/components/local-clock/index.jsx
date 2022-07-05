import React, { useEffect } from "react";
import ClockDisplay from "../shared/clock-display";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <>
      {date && (
        <ClockDisplay
          title={clock.title}
          date={date}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockActions local={true} clock={clock} updateClock={updateClock} createClock={createClock}/>
    </>
  );
};

export default LocalClock;

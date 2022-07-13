import React, { useEffect } from "react";
import ClockDisplay from "../shared/clock-display";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import useTimer from "../../hooks/useTimer";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  let timer = useTimer(date);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <>
      {timer && (
        <ClockDisplay
          title={clock.title}
          date={timer}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockActions local={true} clock={clock} updateClock={updateClock} createClock={createClock}/>
    </>
  );
};

export default LocalClock;

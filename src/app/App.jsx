import React, { useState } from "react";
import ClockList from "../components/clock-list";
import LocalClock from "../components/local-clock";
import useClock from "../hooks/useClock";
import { lightFormat, addMinutes } from 'date-fns';


const App = () => {
  const { date: localDate, localOffset, localTimeZOne } = useClock();
	const { date: india, offset, timezone } = useClock('GMT', 5.5 * 60);
	// const { date: pstzone, offset: offset1, timezone: timezone1 } = useClock('PST');
	// const { clock: pakistan } = useClock('UTC', 5 * 60);
	// const { clock: edt } = useClock('EDT');
	// const { clock: british } = useClock('BST');
	// const { clock: mst } = useClock('MST');

  let date1 = new Date("2022-06-06T15:40:00.000Z");
  console.log(date1)
  console.log(date1.getTimezoneOffset())
  date1 = addMinutes(date1, date1.getTimezoneOffset())
  console.log(date1)
  const format = lightFormat(date1, 'hh:mm:ss a')
  console.log(format);


  
  return (
    <div>
      {localDate !== null && (
        <LocalClock date={localDate} timezone={localTimeZOne} offset={-localOffset}/>
      )}

      {india !== null && (
        <ClockList date={india} timezone={timezone} offset={offset}/>
      )}
    </div>
  );
};

export default App;

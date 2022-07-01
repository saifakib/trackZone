import { useEffect, useState } from "react";
import { addMinutes } from 'date-fns';

const timeZones = {
  PST: -7 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: -1 * 60,
  MST: -6 * 60
}

const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimeZOne, setlocalTimeZOne] = useState('')
  const [utc, setUTC] = useState(null);

  useEffect(() => {
    let d = new Date();   // Here UTC time set from user location
    const lo = d.getTimezoneOffset();   // local offset
    d = addMinutes(d, lo);
    setUTC(d);
    setLocalOffset(lo)
  }, []);

  useEffect(() => {
    if(utc !== null) {
      if(timezone) {
        offset = timeZones[timezone] ?? offset;
        const newUTC = addMinutes(utc, offset);
        setLocalDate(newUTC)
      } else {
        const newUTC = addMinutes(utc, -localOffset);
        const dateStrArr = newUTC.toUTCString().split(' ');
        setLocalDate(newUTC);
        setlocalTimeZOne(dateStrArr.pop());
      }
    }
  }, [utc, timezone, offset])

  return {
    date: localDate,
    dateUTC: utc,
    timezone: timezone || localTimeZOne,
    offset: offset || -localOffset,
  }
}

export default useClock;
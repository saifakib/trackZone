import React from "react";
import useClock from "../../hooks/useClock";
import Clock from '../ui/clocks/ClockD';
import { hour12, AMPM}  from '../../utils/times-utils';


const BaseClock = () => {
  const { title, hours, minutes, seconds } = useClock({
    title: "System Clock",
    timezone: "Asia/Dhaka",
  });
  return (
    <div
      style={{
        width: '80%',
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        fontSize: '2rem',
        margin: '5rem',
        padding: '1rem',
        backgroundColor: '#efefef',
        textAlign: 'center'
      }}
    >
      <Clock>
        <h1>{title}</h1>
        <h2>{hour12(hours)}:{minutes}:{seconds} {AMPM(hours)}</h2>
      </Clock>
    </div>
  );
};

export default BaseClock;

import React from "react";
import useClock from "../../hooks/useClock";
import ClockD from "../ui/clocks/ClockD";
import ClockDiv from "../ui/clocks/ClockDiv";
import PropTypes from "prop-types";
import { hour12, AMPM}  from '../../utils/times-utils';


const Clock = ({ state }) => {
  const { title, hours, minutes, seconds, difference, events } = useClock({
    ...state,
  });

  return (
    <ClockDiv>
      <ClockD>
        <h2>{title}</h2>

        <h1>
          {hour12(hours)}: {minutes}: {seconds} {AMPM(hours)} ({difference})
        </h1>

        {events.length > 0 ?? events.map((event) => <h3>{event.title}</h3>)}
      </ClockD>
    </ClockDiv>
  );
};

Clock.proptypes = {
  getClockInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired
  }).isRequired
};

export default Clock;

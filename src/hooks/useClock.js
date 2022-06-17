import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { differenceInHours, differenceInMinutes } from 'date-fns'

const init = {
  id: null,
  title: "",
  hours: null,
  minutes: null,
  seconds: null,
  timezone: "",
  difference: null,
  events: []
};

const eventInit = {
  title: ""
}

const getDate = (timezone) => {
  let date = new Date().toLocaleString("en-US", {
    timeZone: timezone,
  });
  return dateDistruct(new Date(date));
};

const dateDistruct = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes.toString().padStart(2, "0");
  let seconds = date.getSeconds();
  seconds = seconds.toString().padStart(2, "0");

  let difference = null;
  if(new Date() > date) {
    let differenceByMinutes = differenceInMinutes(new Date(), date);
    let differenceByHours = differenceInHours(new Date(), date);
    difference = differenceByHours +'h ' + differenceByMinutes%60+'m'
  } else {
    let differenceByMinutes = differenceInMinutes(date, new Date());
    let differenceByHours = differenceInHours(date, new Date());
    difference = differenceByHours +'h ' + differenceByMinutes%60+'m'
  }

  return {
    hours,
    minutes,
    seconds,
    difference
  };
};


function* generator() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
let genId = generator();
let enventId = generator();

const useClock = ({ title, timezone }) => {
  const [clock, setClock] = useState({ ...init });

  useEffect(() => {
    setClock((prev) => ({
      ...prev,
      id: genId.next().value,
      title: title,
      timezone: timezone,
      events: []
    }));
    let id = setInterval(() => {
      const { hours, minutes, seconds, difference } = getDate(timezone);
      setClock((prev) => ({
        ...prev,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        difference: difference,
      }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const addEvent = (event) => {
    const id = enventId.next().value;
    const events = mapToStateEvent(clock.events, id, event);
    let oldState = clock;
    oldState.events = events;
    setClock(oldState)
  }

  const removeEvent = (id) => {
    let oldState = clock;
    delete oldState.events[id];
    setClock(oldState);
  }

  return {
    ...clock,
    addEvent,
    removeEvent
  };
};

const mapToStateEvent = (events, id, event) => {
  events[id] = {
    title: event
  }
  return events;
}

useClock.propTypes = {
  title: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default useClock;

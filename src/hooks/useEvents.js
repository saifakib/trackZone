import { useState } from "react";
import { nanoid } from "nanoid";
/**
 * UseEvents Hooks
 */
const UseEvents = () => {
  const [state, setstate] = useState({});

  const getEventsByClockId = (clockId) => {
    return Object.keys(state).filter((event) => event.startsWith(clockId));
  };

  const getEvents = (isArray = false) => {
    if (isArray) return Object.values(state);
    return state;
  };

  const addEvent = (event) => {
    event.id = nanoid(10);
    const { clockId, id } = event;
    setstate((prev) => ({
      ...prev,
      [`${clockId}|${id}`]: event,
    }));
  };

  const updateEvent = (updatedEvent, id) => {
    let events = { ...state };
    events[id] = {
      ...events[id],
      updatedEvent,
    };
    setstate(events);
  };

  const deleteEvent = (id) => {
    let events = { ...state };
    delete events[id];

    setstate(events);
  };

  const deleteEventsByClockId = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );
    setstate(events);
  };

  return {
    events: state,
    getEventsByClockId,
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
    deleteEventsByClockId,
  };
};

export default UseEvents;

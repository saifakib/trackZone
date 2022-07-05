import React, { useState } from "react";
import ClockList from "../components/clock-list";
import LocalClock from "../components/local-clock";
import { nanoid } from "nanoid";

const LOCAL_CLOCK_INIT = {
  title: "Local Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createClock = (clock) => {
    clock.id = nanoid(10);
    setClocks([...clocks, clock]);
  };

  const updateClock = (updateClock) => {
    const updateClocks = clocks.map((clock) => {
      if (clock.id === updateClock.id) return updateClock;
      return clock;
    });
    setClocks(updateClocks);
  };

  const deleteClock = (id) => {
    const updateClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updateClocks);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
        localClock={localClock.date}
      />
    </div>
  );
};

export default App;

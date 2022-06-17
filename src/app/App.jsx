import React, { useState } from "react";
import CreateClockForm from "../components/clock/CreateClock";
import Text from "../components/ui/texts/Text";
import Heading from "../components/ui/texts/Heading";
import Clock from "../components/clock/Clock";
import BaseClock from "../components/clock/BaseClock";

const App = () => {
  const [clocksInfo, setClocksInfo] = useState([]);

  const getClockInfo = (values) => {
    setClocksInfo([].concat(clocksInfo, values));
  };

  return (
    <div className="root">
      <Heading size={"md"}>TrackZone</Heading>
      <CreateClockForm getClockInfo={getClockInfo} />
      <div
        style={{
          margin: "5rem",
        }}
      >
        <BaseClock />
        {clocksInfo.length > 0 ? (
          clocksInfo.map((info, index) => <Clock key={index} state={info} />)
        ) : (
          <Text size={'lg'}>
            No Clocks Infomation available here
          </Text>
        )}
      </div>
    </div>
  );
};

export default App;

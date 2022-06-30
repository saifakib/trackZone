import ClockDisplay from "../shared/clock-display";

const ClockList = ({date, offset, timezone}) => {
  return (
    <>
      <h1>We are Clock List</h1>
      <ClockDisplay title={"User Clock"} date={date} offset={offset} timezone={timezone} />
    </>
  )
}

export default ClockList;



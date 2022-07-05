import ClockListItem from "../clock-list/clock-list-item";

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <>
      <h3>Clock List</h3>
      {clocks.length === 0 ? (
        <p>There are no others clocks</p>
      ) :  (
        clocks.map((clock) => (
          <ClockListItem key={clock.id} clock={clock} updateClock={updateClock} deleteClock={deleteClock} localClock={localClock}/>
        ))
      )}
    </>
  )
}

export default ClockList;



export const hour12 = (hours) => {
  hours = hours % 12;
  let hour12 = hours ? hours : 12;
  return hour12;
};

export const AMPM = (hours) => {
  let ampm = hours >= 12 ? "pm" : "am";
  return ampm;
};

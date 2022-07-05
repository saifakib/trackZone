/**
 * for local clock we won't be change title
 * to create a new clock we have to create title, timezone and offset
 * for edit we have title, timezone and offset
 */

import React, { useState, useEffect } from "react";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import { getOffset, getTimeZone } from "../../../utils/timezone";

/**
 * values Format
 * const values = {
    title: '',
    timezone: '',
    offset: 0
}
 */

const ClockForm = ({
  values = { title: "", timezone: "", utc: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
    setFormValues({ ...values })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Enter Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          disabled={!title}
        />
      </div>
      <div>
        <label htmlFor="timezone">Enter Timezone</label>
        <select
          name="timezone"
          id="timezone"
          value={formValues.timezone}
          onChange={handleChange}
        >
          {getTimeZone.map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>

      {(formValues.timezone === "UTC" || formValues.timezone === "GMT") && (
        <div>
          <label htmlFor="offset">Select Offset</label>
          <select
            name="offset"
            id="offset"
            value={formValues.offset}
            onChange={handleChange}
          >
            {getOffset().map((offset) => (
              <option key={offset} value={offset}>
                {offset}
              </option>
            ))}
          </select>
        </div>
      )}
      <button>{edit ? "Update" : "Create"}</button>
    </form>
  );
};

export default ClockForm;

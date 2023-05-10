import React, { useState } from "react";
import { initialDate } from "../../constants/constants";
import "./DateTimePicker.css";

const DateTimePicker = ({ value, onChange }) => {
  const [date, setDate] = useState(value?.date || initialDate);
  const [time, setTime] = useState(value?.time || initialDate);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onChange({ date: e.target.value, time });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    onChange({ date, time: e.target.value });
  };

  return (
    <div className="date-container">
      <div className="date-select-container">
        <label htmlFor="date">Выберите дату:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>

      <div className="date-select-container">
        <label htmlFor="time">Выберите время:</label>
        <input type="time" id="time" value={time} onChange={handleTimeChange} />
      </div>
    </div>
  );
};

export default DateTimePicker;

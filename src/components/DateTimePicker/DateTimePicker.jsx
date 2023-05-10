import React, { useState } from "react";
import './DateTimePicker.css'

const DateTimePicker = ({ value, onChange }) => {
  const [date, setDate] = useState(value?.date || "");
  const [time, setTime] = useState(value?.time || "");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onChange({ date: e.target.value, time });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    onChange({ date, time: e.target.value });
  };

  return (
    <div>
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

import React from "react";
import { useState } from "react";
import TowerSelect from "../TowerSelect/TowerSelect";
import FloorSelect from "../FloorSelect/FloorSelect";
import MeetingRoomSelect from "../MeetingRoomSelect/MeetingRoomSelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";

import "./BookingForm.css";

const BookingForm = () => {
  const [tower, setTower] = useState("a");
  const [floor, setFloor] = useState("3");
  const [room, setRoom] = useState("1");
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState("");

  const handleTowerChange = (e) => {
    setTower(e.target.value);
  };

  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      tower,
      floor,
      room,
      date,
      comment,
    };

    console.log(data);

    setTower("");
    setFloor("");
    setRoom("");
    setDate("");
    setComment("");
  };

  const handleClear = () => {
    setTower("");
    setFloor("");
    setRoom("");
    setDate("");
    setComment("");
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <TowerSelect value={tower} onChange={handleTowerChange} />
        <FloorSelect value={floor} onChange={handleFloorChange} />
        <MeetingRoomSelect value={room} onChange={handleRoomChange} />
        <DateTimePicker value={date} onChange={handleDateChange} />
        <label htmlFor="comment">Комментарий:</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} />
        <div className="btn-container">
          <button type="submit">Отправить</button>
          <button type="button" onClick={handleClear}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

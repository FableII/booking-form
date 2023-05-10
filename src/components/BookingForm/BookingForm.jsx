import React from "react";
import { useState } from "react";
import TowerSelect from "../TowerSelect/TowerSelect";
import FloorSelect from "../FloorSelect/FloorSelect";
import MeetingRoomSelect from "../MeetingRoomSelect/MeetingRoomSelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import {
  initialTower,
  initialFloor,
  initialRoom,
  initialDate,
  initialComment,
} from "../../constants/constants";

import "./BookingForm.css";
import TextArea from "../TextArea/TextArea";

const BookingForm = () => {
  const [tower, setTower] = useState(initialTower);
  const [floor, setFloor] = useState(initialFloor);
  const [room, setRoom] = useState(initialRoom);
  const [date, setDate] = useState(initialDate);
  const [comment, setComment] = useState(initialComment);

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

  const handleClear = () => {
    setTower(initialTower);
    setFloor(initialFloor);
    setRoom(initialRoom);
    setDate(initialDate);
    setComment(initialComment);
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

    handleClear();
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="main-container">
        <div className="left-container">
          <TowerSelect value={tower} onChange={handleTowerChange} />
          <FloorSelect value={floor} onChange={handleFloorChange} />
          <MeetingRoomSelect value={room} onChange={handleRoomChange} />
        </div>
        <div className="right-container">
          <DateTimePicker value={date} onChange={handleDateChange} />
          <TextArea value={comment} onChange={handleCommentChange} />
        </div>
        </div>
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

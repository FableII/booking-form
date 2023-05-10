import React from "react";
import './MeetingRoomSelect.css'

const MeetingRoomSelect = ({ value, onChange }) => {
  const rooms = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="room-select-container">
      <label htmlFor="room">Выберите переговорку:</label>
      <select id="room" value={value} onChange={onChange}>
        {rooms.map((room) => (
          <option key={room} value={room}>
            {room}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MeetingRoomSelect;
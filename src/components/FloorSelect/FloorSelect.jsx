import React from "react";
import './FloorSelect.css'

const FloorSelect = ({ value, onChange }) => {
  const floors = Array.from({ length: 25 }, (_, i) => i + 3);

  return (
    <div className="floor-select-container">
      <label htmlFor="floor">Выберите этаж:</label>
      <select id="floor" value={value} onChange={onChange}>
        {floors.map((floor) => (
          <option key={floor} value={floor}>
            {floor}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FloorSelect;
import React from "react";
import './TowerSelect.css'

const TowerSelect = ({ value, onChange }) => {
  return (
    <div className="tower-select-container">
      <label htmlFor="tower">Выберите башню:</label>
      <select id="tower" value={value} onChange={onChange}>
        <option value="a">Башня А</option>
        <option value="b">Башня Б</option>
      </select>
    </div>
  );
};

export default TowerSelect;
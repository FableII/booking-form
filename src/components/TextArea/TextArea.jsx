import React from "react";
import './TextArea.css'

const TextArea = ({ value, onChange }) => {
  return (
    <div className="text-area-container">
      <label htmlFor="comment">Комментарий:</label>
      <textarea id="comment" value={value} onChange={onChange} />
    </div>
  );
};

export default TextArea;

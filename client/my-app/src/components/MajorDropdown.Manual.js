import React from 'react';

const MajorDropdown = ({ majors, selectedMajor, handleMajorChange }) => (
  <div>
    <label htmlFor="majorDropdown">Select a Major:</label>
    <select id="majorDropdown" value={selectedMajor} onChange={handleMajorChange}>
      <option value="">Select a major</option>
      {majors.map((major, index) => (
        <option key={index} value={major}>{major}</option>
      ))}
    </select>
  </div>
);

export default MajorDropdown;

import React from 'react';

const ClassDropdown = ({ classes, selectedClass, selectNewClass }) => (
  <div>
    <label htmlFor="classDropdown">Select a Class:</label>
    <select id="classDropdown" value={selectedClass} onChange={selectNewClass}>
      <option value="">Select a class</option>
      {classes.map((className, index) => (
        <option key={index} value={className}>{className}</option>
      ))}
    </select>
  </div>
);

export default ClassDropdown;
/**
 * A. value="" means its the placeholder one
 * B. select takes on multiple option elements that you can select. Dynamically created based on the mapping of classes, which is updated whenever a new major is selected
 * C. in select, value={selectedClass} means that its the saved value for the select
 */
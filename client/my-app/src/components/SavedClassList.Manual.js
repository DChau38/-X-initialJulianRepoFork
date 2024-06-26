import React from 'react';

const SavedClassList= ({ selectedClasses, handleRemoveClass }) => (
  <div>
    {selectedClasses.map(classItem => (
      <div key={classItem.id}>
        {classItem.name} <button onClick={() => handleRemoveClass(classItem.id)}>X</button>
      </div>
    ))}
  </div>
);

export default SavedClassList;
/**
 * A. key is an important attribute so React can quickly find and update things i guess. The dynamics seem to all have it
 * B. a div, where there is some code that maps from selectedClasses->blocks per class, with a remove button
 */
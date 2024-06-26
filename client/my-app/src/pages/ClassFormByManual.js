import '../styles/ClassFormByManual.css';
import React, { useState } from 'react';
//import state+effects
import useClassFormByManual from '../hooks/Manual.index.js';
import useFetchClassesUponMajorChange from '../hooks/Manual.fetchMajorClasses.js';
//components
import SavedClassList from '../components/SavedClassList.Manual.js';
import ClassDropdown from '../components/ClassDropdown.Manual.js';
import MajorDropdown from '../components/MajorDropdown.Manual.js';

function ClassFormByManual(){
    //A. accepting states + functions
    const {
        majors,
        classes,
        selectedMajor,
        selectedClass,
        savedClasses,
        handleMajorChange,
        selectNewClass,
        addClass,
        removeClass,
        handleSendToBackend,
        setClasses
      }=useClassFormByManual();
    //B. useEffect hook
    useFetchClassesUponMajorChange(selectedMajor,setClasses);
    //C. page elements
    return (
        <>
          <SavedClassList savedClasses={savedClasses} removeClass={removeClass} />
          <form onSubmit={addClass}>
            <MajorDropdown majors={majors} selectedMajor={selectedMajor} handleMajorChange={handleMajorChange} />
            <ClassDropdown classes={savedClasses} selectedClass={selectedClass} selectedNewClass={selectNewClass} />
            <button type="submit">Add</button>
            <button type="button" onClick={handleSendToBackend}>Update</button>
          </form>
        </>
      );
    };


export default ClassFormByManual;



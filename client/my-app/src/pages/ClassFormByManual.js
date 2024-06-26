import '../styles/ClassFormByManual.css';
import React, { useState } from 'react';
//import state+effects
import useClassFormByManual from '../hooks/Manual.index.js';
import useFetchClassesUponMajorChange from '../hooks/Manual.fetchMajorClasses.js';
//components
import SavedClassList from '../components/SavedClassList.Manual.js';
import ClassDropdown from '../components/ClassDropdown.Manual.js';
import MajorDropdown from '../components/MajorDropdown.Manual.js';
import ErrorMessage from '../components/ErrorMessage.js';

function ClassFormByManual(){
    //A. accepting states + functions
    const {
        majors,
        selectedMajorClasses,
        selectedMajor,
        selectedClass,
        savedClasses,
        handleMajorChange,
        selectNewClass,
        addClass,
        removeClass,
        handleSendToBackend,
        setSelectedMajorClasses,
        setSavedClasses,
        errorMessage,
      }=useClassFormByManual();
    //B. useEffect hook
    useFetchClassesUponMajorChange(selectedMajor,setSelectedMajorClasses);
    //C. page elements
    return (
        <>
        <div className="saved-classes-and-errorMessage">
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <SavedClassList savedClasses={savedClasses} removeClass={removeClass} />
        </div>
          <form onSubmit={addClass}>
            <MajorDropdown majors={majors} selectedMajor={selectedMajor} handleMajorChange={handleMajorChange} />
            <ClassDropdown selectedMajorClasses={selectedMajorClasses} selectedClass={selectedClass} selectNewClass={selectNewClass} />
            <button type="submit">Add</button>
            <button type="button" onClick={handleSendToBackend}>Update</button>
          </form>
        </>
      );
    };


export default ClassFormByManual;



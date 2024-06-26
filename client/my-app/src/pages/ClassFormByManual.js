import '../styles/ClassFormByManual.css';
import React, { useState } from 'react';
//hooks
import useFetchMajors from '../hooks/useFetchMajors.Manual';
import useFetchClassesUponMajorChange from '../hooks/useFetchMajorClasses.Manual';
//functions
import {selectNewClass,removeClass,handleMajorChange,handleSendToBackend} from '../utils/miscellanous';
import addClass from '../utils/addClass.Manual';
//components
import ClassList from '../components/ClassList.Manual.js';
import ClassDropdown from '../components/ClassDropdown.Manual.js';
import MajorDropdown from '../components/MajorDropdown.Manual.js';

function ClassFormByManual(){
    //A. states+variables
        //initial fetch of all majors
    const majors=useFetchMajors();
        //selected major
    const[selectedMajor,setSelectedMajor]=useState('');
        //fetch of selected major's classes
    const[classes,setClasses]=useState([]);
        //selected class
    const[selectedClass,setSelectedClass]=useState('');
        //saved classes
    const[savedClasses,setSavedClasses]=useState('');

    //B. useEffect hooks
    useFetchClassesUponMajorChange(selectedMajor,setClasses);
    //C. pageElement
    return (
        <>
          <ClassList selectedClasses={savedClasses} removeClass={removeClass} />
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



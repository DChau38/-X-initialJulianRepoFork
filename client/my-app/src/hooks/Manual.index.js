import {useState} from 'react';
import axios from 'axios';
//useEffect hook
import useFetchMajors from '../hooks/Manual.fetchMajors.js';
import useFetchClassesUponMajorChange from '../hooks/Manual.fetchMajorClasses.js';

function useClassFormByManual(){
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
  const[savedClasses,setSavedClasses]=useState([]);


  //B. functions
      //selects new class
    const selectNewClass = (event) => {
      setSelectedClass(event.target.value);
   };
      //remove class upon 
   const removeClass = (id) => {
      setSavedClasses(savedClasses.filter(classItem => classItem.id !== id));
   };
      //clear classes+adjustMajorChange
   const handleMajorChange= (event) => {
      setSelectedMajor(event.target.value);
      setClasses([]);
   };
      //send saved classes to backend
   const handleSendToBackend = async () => {
      try {
          const response = await axios.post('http://localhost:9000/sentClasses', { savedClasses });
          console.log('Data sent to backend successfully:', response.data);
      } catch (error) {
          console.error('Error sending data to backend:', error);
      }
  };
      //adds class
    const addClass = (event, setSelectedClass,setSavedClasses) => {
      event.preventDefault();
      //(case): they have not selected  a calss
      if (selectedClass === '') {
          //setErrorMessage('Please select a class before submitting.');
          return;
      }
      //A. Check if the selected class is already in the selectedClasses array
      const classExists = savedClasses.some(classItem => classItem.name === selectedClass);
      if (classExists) {
          //setErrorMessage('This class has already been added.');
          return;
      }
      //B. If the class does not exist, add it to the selectedClasses array
      setSavedClasses([...savedClasses, { id: savedClasses.length, name: selectedClass }]);
      setSelectedClass('');
      //setErrorMessage(''); // Clear the error message after successful submission
      };
  //D. return
  return {
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
    //lol the hook needs it
    setClasses,
  };
    
};

export default useClassFormByManual;
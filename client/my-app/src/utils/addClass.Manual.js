const addClass = (event, setSelectedClass,setSelectedClasses) => {
    event.preventDefault();
    //(case): they have not selected  a calss
    if (selectedClass === '') {
       //setErrorMessage('Please select a class before submitting.');
       return;
    }
    //A. Check if the selected class is already in the selectedClasses array
    const classExists = selectedClasses.some(classItem => classItem.name === selectedClass);
    if (classExists) {
       //setErrorMessage('This class has already been added.');
       return;
    }
    //B. If the class does not exist, add it to the selectedClasses array
    setSelectedClasses([...selectedClasses, { id: selectedClasses.length, name: selectedClass }]);
    setSelectedClass('');
    //setErrorMessage(''); // Clear the error message after successful submission
   };
export default addClass;
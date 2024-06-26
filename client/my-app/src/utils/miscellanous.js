    //selects new class
    const selectNewClass = (event) => {
        setSelectedClass(event.target.value);
     };
        //remove class upon 
     const removeClass = (id) => {
        setSelectedClasses(selectedClasses.filter(classItem => classItem.id !== id));
     };
        //clear classes
     const handleMajorChange = (event) => {
        setSelectedMajor(event.target.value);
        setClasses([]);
     };
        //send saved classes to backend
     const handleSendToBackend = async () => {
        try {
            const response = await axios.post('http://localhost:9000/sentClasses', { selectedClasses });
            console.log('Data sent to backend successfully:', response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };
modules.export={selectNewClass,removeClass,handleMajorChange, handleSendToBackend};
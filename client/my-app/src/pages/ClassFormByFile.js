import React, {useState} from 'react';
import axios from 'axios';
import '../styles/ClassFormByFile.css';

/**
 * A. we use selectedFile the state for determining if we need them to select one
 * B. FormData lets you append file objects to FormData
 * C. response.data() could be anything, while response.json().data() is parsed into a JSON
 * D. setSelectedFile the function must be passed so it can be used, but not the state variable (prob bs)
 * E. onClick and onChange one or the other needs the event
 */
const handleFileChange=(event,setSelectedFile)=>{
    setSelectedFile(event.target.files[0]);
}

const handleUpload = async(selectedFile)=>{
    //A. no selected file
    if (!selectedFile){
        alert('Please select a file for upload');
        return;
    }
    //B. append file to formData
    const formData=new FormData();
    formData.append('file',selectedFile);
    //C. try to send
    try {
        const response=await axios.post('http:/localhost:9000/degreeAudit',formData);
        console.log('Success:',response.data());
        alert('File uploaded successfully');
    }
    catch (error){
        console.error('Error:',error);
        alert('File upload failed');
    }
}
function ClassFormByFile(){
    //A. state of selectedFile
    const [selectedFile,setSelectedFile]=useState(null);
    //B. return component
    return (
        <div className='file-upload-wrapper'>
            <h3>Submit your Degree Audit!</h3>
            <div className='file-upload-container'>
                <input type='file' onChange={event=>(handleFileChange(event,setSelectedFile))}/>
                <button onClick={handleUpload}>Update</button>
            </div>
        </div>
    )
}
export default ClassFormByFile;
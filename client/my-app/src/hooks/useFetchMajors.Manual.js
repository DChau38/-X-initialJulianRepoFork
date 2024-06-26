import {useEffect,useState} from 'react';

function useFetchMajors(){
    //A. state for holding majors
    const [majors,setMajors]=useState([]);
    //B. useEffect for fetching
    useEffect(()=>{
        (async function FetchData(){
            try {
                const response=await fetch('https/localhost:9000/major');
                const data=await response.json();
                setMajors(data);
            }
            catch (error){
                console.log('Our error is', error);
                setMajors([]);
            }


        })();
    },
    []);
    //C. return Majors
    return majors;
}
export default useFetchMajors;
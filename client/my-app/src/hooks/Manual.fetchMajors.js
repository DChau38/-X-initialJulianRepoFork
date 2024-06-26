import {useEffect,useState} from 'react';

//1. we fetch majors once. So we're gonna feed this into Manual.index to get the majors, and then the values will be sent to the page as a state
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
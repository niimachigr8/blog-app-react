import { useEffect, useState } from "react";

const useFetch = (url) => {

    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        // Abort Controller
        const abortCont = new AbortController();
        const signal = abortCont.signal;

        setTimeout(() => {
            fetch(url,{signal})
            .then(res=> {
                if(!res.ok){
                throw Error('could not fetch data');
                }
                return res.json();})
            .then(data=> {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch Aborted');
                } else{
                    setError(err.message);
                    setIsPending(false);
                }
            })
        },1000);
        return () => abortCont.abort();
    },[url]);

    return{ data, isPending, error };
}

export default useFetch;
import { useState, useEffect } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() =>{

        setTimeout(() =>{
             fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('could not fetch the data for that resources')
            }
            return res.json();
           // console.log(res);
        })
        .then(data =>{
            console.log(data);
            setData(data);
            setIsPending(false);
            SetError(null);
        })
        .catch(err =>{
            setIsPending(false)
           SetError(err.message);
        })
        }, 500);
    }, [url]);
    return{data, isPending, error}
}

export default useFetch
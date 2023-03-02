import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data for that resource.');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
            })
    }, [url]);

    return {data, isLoading, error}

}

export default useFetch;
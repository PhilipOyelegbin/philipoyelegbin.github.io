import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        };
        getData();
    }, [url])

    return (
        {data}
    );
}

export default useFetch
    
    
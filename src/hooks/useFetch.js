import { useEffect, useState } from 'react';

export const useFetcher = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err && "Unable to fetch data!");
                setLoading(false);
            });
            
    }, [url])

    return (
        {loading, error, data}
    );
}    
    
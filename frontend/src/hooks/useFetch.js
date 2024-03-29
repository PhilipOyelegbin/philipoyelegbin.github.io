import UseSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then(res => res.data);

export const getData = (url) => {
    const {data, error} = UseSWR(url, fetcher, {
        refreshInterval: 0,
        revalidateOnMount: true,
        revalidateOnReconnect: true,
    })

    return (
        {data, error, loading: !data && !error}
    );
}
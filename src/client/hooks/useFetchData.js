import { useState, useEffect } from 'react';

export default function useFetchData(searchString) {
    const params = searchString ? `?search=${searchString}` : '';
    const [ data, setData ] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`/api/items${params}`);
          const json = await res.json();
          setData(json.items);
        } catch(err) {
          console.log(err.message);
        }
      };

      if (searchString) {
        //throttling API request in case of search
        const timer = setTimeout(() => fetchData(), 500);

        return () => clearTimeout(timer);
      } else {
        fetchData();
      };

    }, [searchString]);

    return data;
};

import React,{useState,useEffect} from 'react'

function useFetch(url) {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const controller = new AbortController();
      setLoading(true)
  
      async function fetchData() {
        try {
          const response = await fetch(url, { signal: controller.signal });
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Fetch was aborted');
          } else {
            setError(error);
          }
          setLoading(false);
        }
      }

      fetchData()
  
      return () => {
        controller.abort();
      };
    }, [url]);
  
    return { data, loading, error };
  }
  
export default useFetch;
import React from 'react'
import Code from '../components/code';

export const Hooks = () => {
  return (
    <div>
        
        <p>
        This is a custom hook that allows a React component to perform a fetch request and manage the loading, error, and data states for the request.

The hook begins by declaring three state variables: data, loading, and error. These will be used to store the data returned from the fetch request, a boolean indicating whether the request is in progress, and any error that may occur during the request, respectively.

The useEffect hook is then used to perform the actual fetch request. The effect is only run when the url argument to the useFetch hook changes, which is specified in the array at the end of the hook.

The AbortController and signal features are used to allow the effect to be cleaned up (aborted) when the component using the hook unmounts. This is important to prevent memory leaks and unnecessary network requests.

The try and catch blocks are used to handle errors that may occur during the fetch request. If an error occurs that is not an AbortError, it is stored in the error state variable.

Finally, the hook returns an object with the data, loading, and error state variables, which can be destructured and used in the component that is using the hook.
        </p>


    <Code value={`import React,{useState,useEffect} from 'react'

function useFetch(url) {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log(loading)
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
  
export default useFetch;`}></Code>

    </div>
  )
}

export default Hooks
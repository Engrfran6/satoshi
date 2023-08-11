import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useFetch = (url) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 const navigate = useNavigate()

 
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if(isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      // This cleanup function will run when the component unmounts to avoid memory leaks.
      isMounted = false;
    };
  }, []);


       // Handle Logout
    const logout =()=> {
      setData(null)

      navigate('/login')
    }

  return ({ data, loading, error, logout});
};


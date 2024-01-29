import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpComingMovie = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    // const  [loadind,setLoading] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const baseUrl = 'https://api.themoviedb.org/3';
          const endpoint = '/movie/upcoming';
          const apiKey = '716b1819e64715885194068ab1ab2892';
  
          const url = `${baseUrl}${endpoint}?api_key=${apiKey}`;
  
  
          const response = await axios.get(url);
          setResponseData(response.data);
          console.log(response);
        } catch (error) {
          console.error(error);
          setError(error.message || 'An error occurred');
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>UpComing Movies</h1>
        {error ? (
          <p>Error: {error}</p>
        ) : responseData ? (
          responseData.results.map((result, index) => (
            <div key={index}>
                <img src= {`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt=''/>
                 <p>Title: {result.title}</p>
              <p>Release Date: {result.release_date}</p> 
              
              {/* Add more details as needed */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default UpComingMovie;
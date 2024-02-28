import React, { useState, useEffect } from "react";

export const useFetchTV = (path, query = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${path}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;

  useEffect(() => {
    async function fetchMoviesTV() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      console.log(data);
    }

    fetchMoviesTV();
  }, [url]);
  return { data };
};

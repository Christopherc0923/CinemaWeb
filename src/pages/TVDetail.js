import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TVDetail() {
  const params = useParams();
  const [data, setData] = useState({});
  const url = `https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function fetchMovieDetail() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchMovieDetail();
  }, []);

  let textColorClass = "";
  if (data.vote_average & (data.vote_average >= 7)) {
    textColorClass = "text-green-500"; // Green color for high ratings
  } else if (data.vote_average >= 5) {
    textColorClass = "text-yellow-500"; // Yellow color for average ratings
  } else {
    textColorClass = "text-red-500"; // Red color for low ratings
  }

  return (
    <main className="min-h-screen">
      <div className="text-black dark:text-white text-center flex justify-center flex-col lg:flex-row py-10 items-center">
        <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg "
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt=""
          />
        </div>

        <div className="max-w-2xl mx-10">
          <h1 className="text-5xl m-3 text-font">{data.original_name}</h1>
          <p className="text-2xl m-3">Release Date: {data.first_air_date}</p>

          <p className="text-justify">{data.overview}</p>

          <p className="font-bold">
            <span className={textColorClass}>{data.vote_average}</span> |{" "}
            {data.vote_count} Reviews
          </p>
          <p className="">Seasons: {data.number_of_seasons}</p>
          <p className="">Ep: {data.number_of_episodes}</p>
          <ul className="flex justify-start">
            {data?.genres?.map((genre) => (
              <li
                className="border border-gray-200 rounded-lg p-2 mx-2"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default TVDetail;

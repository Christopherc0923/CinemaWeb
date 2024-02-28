import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/Placeholder.png";

function Card({ movie }) {
  const {
    id,
    original_title,
    overview,
    poster_path,
    vote_average,
    original_name,
  } = movie;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <>
      {original_name ? (
        <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/tv/${id}`}>
            <img
              className="rounded-t-lg "
              src={
                image != "https://image.tmdb.org/t/p/w500/undefined" &&
                image != "https://image.tmdb.org/t/p/w500/null"
                  ? image
                  : placeholder
              }
              alt=""
            />
          </Link>
          <div className="p-5">
            <Link to={`/tv/${id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {original_title ? original_title : original_name}
              </h5>
            </Link>
            <p className="mb-3 font-bold text-yellow-400">{vote_average}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {overview}
            </p>
          </div>
        </div>
      ) : (
        <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/movie/${id}`}>
            <img className="rounded-t-lg " src={image} alt="" />
          </Link>
          <div className="p-5">
            <Link to={`/movie/${id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {original_title ? original_title : original_name}
              </h5>
            </Link>
            <p className="mb-3 font-bold text-yellow-400">{vote_average}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {overview}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;

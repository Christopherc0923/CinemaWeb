import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList path="movie/now_playing" />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/movies/popular"
          element={<MovieList path="movie/popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList path="movie/top_rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList path="movie/upcoming" />}
        />
        <Route path="search" element={<Search path="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

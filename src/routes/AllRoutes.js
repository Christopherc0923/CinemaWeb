import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";
import TVList from "../pages/TVList";
import TVDetail from "../pages/TVDetail";

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
        <Route path="search" element={<Search path="search/multi" />} />

        <Route
          path="/tv/upcoming"
          element={<TVList path="tv/airing_today" />}
        />
        <Route path="/tv/popular" element={<TVList path="tv/popular" />} />
        <Route path="/tv/top" element={<TVList path="tv/top_rated" />} />
        <Route path="/tv/:id" element={<TVDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

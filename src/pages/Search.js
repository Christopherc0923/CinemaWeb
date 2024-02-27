import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { useFetch } from "../hook/useFetch";

function Search({ path }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  console.log(query);
  const { data: movies } = useFetch(path, query);

  return (
    <main className="min-h-screen">
      {/* Movie List */}
      <section className="max-w-7xl mx-auto py-7">
        <p className="text-2xl text-black dark:text-white">
          {movies.length === 0
            ? `No movie found for ${query}`
            : `Result for ${query}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;

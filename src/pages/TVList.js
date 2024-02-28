import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useFetch } from "../hook/useFetch";

function TVList({ path }) {
  const { data: movies } = useFetch(path);

  return (
    <main className="min-h-screen">
      {/* Movie List */}
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default TVList;

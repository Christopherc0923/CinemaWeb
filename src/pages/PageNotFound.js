import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const PageNotFound = () => {
  // Redirect to the home page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen text-center">
      <h1 className="mb-2 text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
        404 - Page Not Found
      </h1>
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        You will be redirected to the home page shortly...
      </p>
    </main>
  );
};

export default PageNotFound;

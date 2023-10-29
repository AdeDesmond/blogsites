"use client";

import React, { useEffect } from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { disgest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, [error]);
  return (
    <main className="w-full h-full flex items-center justify-center flex-col">
      <h1 className="text-center text-red-400">
        Something went wrong with the data
      </h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-6 py-2 text-center bg-blue-600 hover:bg-blue-400 text-white hover:text-white text-sm transition"
      >
        Try Again
      </button>
    </main>
  );
}

export default Error;

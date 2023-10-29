"use client";

import React from "react";
import { LuSearch } from "react-icons/lu";

function TitleSearch() {
  return (
    <div className="flex justify-center flex-col items-center mb-7 ">
      <h1 className="text-3xl font-bold ">Our Blogs</h1>
      <p className="text-sm text-slate-400 mb-3">
        A center for our resources and insights
      </p>
      <div className="flex items-center border-[0.1rem] border-slate-500 rounded-lg overflow-hidden">
        <LuSearch className="text-2xl text-red-400" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter your search"
          className="w-[20rem] h-10 focus:outline-none bg-slate-100 md:w-[30rem] lg:w-[35rem]"
        />
      </div>
    </div>
  );
}

export default TitleSearch;

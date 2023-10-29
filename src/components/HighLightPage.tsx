"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuClock5, LuDot } from "react-icons/lu";
function HighLightPage({ blogs }: { blogs: any[] }) {
  const hightLightData = blogs?.at(0);
  return (
    <section className="lg:flex lg:items-center lg:justify-center gap-8 mb-10 sm:flex md:flex md:items-center md:p-10 sm:p-10 ">
      {blogs?.length && (
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row md:flex-row px-[2rem]">
          <div>
            <Link href={`/blogs/fullcontent/${hightLightData._id}`}>
              <Image
                src={hightLightData?.images}
                width={500}
                height={500}
                alt="Vr photo"
                className="rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl hover:skew-x-1"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <p className="text-blue-400 font-semibold">
                {hightLightData?.category?.category}
              </p>
              <LuClock5 />
              <p className="text-sm font-semibold text-blue-700">
                {hightLightData.time}:mins read
              </p>
            </div>
            <p className="w-[20rem] text-xl font-semibold ">
              {hightLightData.description.slice(0, 100)}...
            </p>
            <div className="flex items-center space-x-2">
              <Image
                src={hightLightData.author?.image}
                width={50}
                height={50}
                alt="profile photo"
                className="w-11 h-11 rounded-full object-cover shadow-md"
              />
              <p className="text-xl font-semibold text-gray-500">
                {hightLightData.author?.name}
              </p>
              <LuDot className="text-2xl" />
              <p className="text-sm">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HighLightPage;

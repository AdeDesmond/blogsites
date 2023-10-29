"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { LuClock5, LuDot } from "react-icons/lu";

function BlogBox({ blog }: { blog: any }) {
  const pathName = usePathname();
  const redirectUser = pathName === "/" ? "/fullcontent" : "/edit";

  const colors =
    blog?.category?.category === "technology"
      ? " text-blue-400"
      : blog?.category?.category === "universe"
      ? " text-red-400"
      : blog?.category?.category === "health"
      ? " text-green-400"
      : blog?.category?.category === "politics"
      ? " text-yellow-400"
      : blog?.category?.category === "sports"
      ? " text-purple-400"
      : blog?.category?.category === "entertainment"
      ? " text-pink-400"
      : blog?.category?.category === "lifestyle"
      ? " text-indigo-400"
      : blog?.category?.category === "fashion"
      ? " text-gray-400"
      : blog?.category?.category === "food"
      ? " text-yellow-400"
      : blog?.category?.category === "travel"
      ? " text-green-400"
      : blog?.category?.category === "education"
      ? " text-blue-400"
      : blog?.category?.category === "business"
      ? " text-red-400"
      : blog?.category?.category === "science"
      ? " text-yellow-400"
      : blog?.category?.category === "culture"
      ? " text-pink-400"
      : blog?.category?.category === "art"
      ? " text-purple-400"
      : blog?.category?.category === "history"
      ? " text-indigo-400"
      : blog?.category?.category === "nature"
      ? " text-green-400"
      : blog?.category?.category === "architecture"
      ? " text-blue-400"
      : blog?.category?.category === "animals"
      ? " text-red-400"
      : blog?.category?.category === "design"
      ? " text-yellow-400"
      : blog?.category?.category === "photography"
      ? " text-pink-400"
      : blog?.category?.category === "automobile"
      ? " text-purple-400"
      : blog?.category?.category === "gadgets"
      ? " text-indigo-400"
      : blog?.category?.category === "gaming"
      ? " text-blue-400"
      : blog?.category?.category === "movies"
      ? " text-red-400"
      : blog?.category?.category === "music"
      ? " text-yellow-400"
      : blog?.category?.category === "books"
      ? " text-pink-400"
      : blog?.category?.category === "beauty"
      ? " text-purple-400"
      : blog?.category?.category === "fitness"
      ? " text-indigo-400"
      : blog?.category?.category === "diy"
      ? " text-blue-400"
      : " text-black";
  return (
    <section className="mb-6">
      <div className="w-[20rem]">
        <div className="mb-1">
          <Link href={`/blogs/${redirectUser}/${blog?._id}`}>
            <Image
              src={blog?.images}
              width={400}
              height={400}
              alt="caption image"
              className="w-full rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <p className={`font-semibold ${colors}`}>
            {blog?.category?.category}
          </p>
          <LuClock5 />
          <p className={`text-sm font-semibold ${colors}`}>
            {blog?.time || 5}:mins read
          </p>
        </div>
        <Link href={`/blogs/edit/${blog?._id}`}>
          <h1 className="text-xl font-bold">{blog?.title}</h1>
        </Link>
        <p className="mb-2 text-gray-400">
          {blog?.description.slice(0, 100)}...
        </p>
        <div className="flex items-center space-x-2">
          <Image
            src={blog?.author?.image}
            width={50}
            height={50}
            alt="profile photo"
            className="w-11 h-11 rounded-full object-cover shadow-md"
          />
          <p className="font-semibold text-gray-500">{blog?.author?.name}</p>
          <LuDot className="text-2xl" />
          <p className="text-sm">{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogBox;

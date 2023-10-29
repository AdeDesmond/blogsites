import { getBlogById } from "@/lib/data";
import Image from "next/image";
import React from "react";

async function FullContentPage({ params }: { params: { id: string } }) {
  const { id: _id } = params;
  const blogContentById = await getBlogById(_id);

  return (
    <section className="w-full">
      <div className="relative">
        <Image
          src={blogContentById?.blogData?.images}
          width={500}
          height={500}
          alt="blog image"
          className="z-0 w-full h-[30rem] object-cover"
        />
        <div className="absolute z-20 top-1/2 right-0 backdrop-blur-3xl px-10 bg-slate-500 md:bg-slate-800">
          <h1 className="text-3xl text-white text-center mb-3 mt-10 border-b-[0.04rem] border-slate-50 font-extrabold">
            {blogContentById.blogData.title}
          </h1>
          <p className="text-slate-200 text-md mb-10 ">
            {blogContentById.blogData.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FullContentPage;

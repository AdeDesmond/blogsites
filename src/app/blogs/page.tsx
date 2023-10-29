"use client";

import BlogBox from "@/components/BlogBox";
import { Suspense } from "react";
import { CardSkeleton } from "@/components/Skeletons";
import { getMostRecentBlogs } from "@/lib/data";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function BlogsPage() {
  const [blogsData, setBlogsData] = useState<any[] | null>(null);
  const router = useRouter();
  const handleNewBlogRoute = function () {
    router.push("/blogs/new");
  };

  async function fetchBlogs() {
    const blogs = await getMostRecentBlogs();
    if (blogs) {
      setBlogsData(blogs);
    } else {
      setBlogsData([]);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <section className="px-10 w-full">
      <button
        onClick={handleNewBlogRoute}
        className="bg-slate-900 px-5 py-2 text-white rounded-lg shadow-md mb-4 ml-10"
      >
        New Blog
      </button>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
        {blogsData?.length &&
          blogsData?.map((blog) => (
            <Suspense key={blog._id} fallback={<CardSkeleton />}>
              <BlogBox blog={blog} />
            </Suspense>
          ))}
      </div>
    </section>
  );
}

export default BlogsPage;

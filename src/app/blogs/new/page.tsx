"use client";
import { useSession } from "next-auth/react";
import { PostBlogEditForm } from "@/components/PostBlogEditForm";
import { redirect } from "next/navigation";
function BlogsNewPage() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/signin");
  }
  return (
    <>
      <div className="w-full">
        <PostBlogEditForm />
      </div>
    </>
  );
}

export default BlogsNewPage;

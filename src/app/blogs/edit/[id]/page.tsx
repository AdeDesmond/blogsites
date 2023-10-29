import { PostBlogEditForm } from "@/components/PostBlogEditForm";
import { getBlogById } from "@/lib/data";
import React from "react";

async function EditBlogPage({ params }: { params: { id: string } }) {
  const { id: _id } = params;
  const populateBlogToEdit = await getBlogById(_id);

  return (
    <div>
      <PostBlogEditForm {...populateBlogToEdit.blogData} />
    </div>
  );
}

export default EditBlogPage;

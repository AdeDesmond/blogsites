"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "./Spinner";
import Image from "next/image";
import { toast } from "react-hot-toast";

function PostBlogEditForm({
  _id,
  title: editedTitle,
  description: editedDesciption,
  images: editedImages,
}:
  | {
      _id: string;
      title: string;
      description: string;
      image: string;
    }
  | any) {
  const [title, setTitle] = useState(editedTitle || "");
  const [description, setDescription] = useState(editedDesciption || "");
  const [isUpLoading, setIsUpLoading] = useState(false);
  const [time, setTime] = useState<string | number>("");
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]) as any[];
  const [image, setImage] = useState(editedImages || "");
  const [user, setUser] = useState<{ _id: string } | null>(null);

  const handleUploadImage = async function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    try {
      setIsUpLoading(true);
      const files: FileList | null = e.target.files;
      const imageData = new FormData();
      if (!files) return;
      for (let i = 0; i < files?.length!; i++) {
        const file = files[i];
        if (file) {
          imageData.append("file", file);
        }
      }
      const res = await axios.post("/api/upload", imageData);
      const data = res.data.imagesDataLink;
      setImage(data);
      setIsUpLoading(false);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSubmitBlogs = async function (
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    try {
      setError(null);
      const data = {
        title,
        description,
        image,
        user: user?._id,
        selectedCategory,
        time,
      };
      if (_id) {
        await axios.put(`/api/blogs/${_id}`, { ...data, _id });
        toast.success("Blog updated successfully");
      } else {
        await axios.post("/api/blogs", data);
        toast.success("Blog created successfully");
        setDescription("");
        setTitle("");
        setImage("");
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(error);
    }
  };

  useEffect(
    function () {
      axios.get("/api/users/me").then((res) => {
        const data = res.data.userData;
        setUser(data);
      });
    },
    [user]
  );
  useEffect(function () {
    axios.get("/api/category").then((res) => {
      setCategories(res.data.data);
    });
  }, []);
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmitBlogs}
        action=""
        className="flex flex-col w-1/2 justify-center mx-auto gap-1 font-semibold"
      >
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          placeholder="Enter your title"
          className="h-10 rounded-lg focus:outline-none mb-1"
        />
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              name="category"
              id="category"
              className="w-[10rem] h-8 rounded-lg "
            >
              {categories &&
                categories.map((cat: any) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.category}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="time" className="font-semibold">
              Read Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              name=""
              id=""
              className="w-[10rem] h-8 rounded-lg"
            >
              <option value="5">5 Mins</option>
              <option value="10">10 Mins</option>
              <option value="15">15 Mins</option>
              <option value="20">20 Mins</option>
            </select>
          </div>
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          id="description"
          className="rounded-lg focus:outline-none"
        />

        <label htmlFor="images">Image</label>
        <input
          type="file"
          name="images"
          id="images"
          className="mb-2"
          onChange={handleUploadImage}
        />
        {isUpLoading && <Spinner />}
        {image && (
          <div>
            <Image src={image} alt="blog images" width={100} height={100} />
          </div>
        )}
        <button className="bg-slate-900 px-6 py-1 text-white rounded-lg shadow-md w-1/2 self-center">
          Submit
        </button>
      </form>
    </div>
  );
}

export { PostBlogEditForm };

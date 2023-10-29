export const getBlogs = async function () {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
    });
    const data = await res.json();
    const blogs = data.blogsData;

    return blogs;
  } catch (err: Error | unknown) {
    console.log(err);
    throw new Error("Failed to get the blogs from the database");
  }
};

export const getBlogById = async function (id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (err: Error | unknown) {
    console.log(err);
    throw new Error("Failed to get the blog from the database");
  }
};

export const getMostRecentBlogs = async function () {
  try {
    const res = await fetch("http://localhost:3000/api/blogcontents", {
      method: "GET",
    });
    const data = await res.json();
    const blogs = data.blogsData;

    return blogs;
  } catch (err: Error | unknown) {
    console.log(err);
    throw new Error("Failed to get the blogs from the database");
  }
};

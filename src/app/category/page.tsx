"use client";
import axios from "axios";
import React from "react";

function CategoryPage() {
  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState([]) as any[];
  const [error, setError] = React.useState<string | null>(null);
  console.log(categories);
  const handleAddCategory = async function (
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    if (!category) return setError("Category is required");
    const data = {
      category,
    };
    try {
      const res = await axios.post("/api/category", data);
      setCategory("");
      setCategories((oldata: []) => [...oldata, res.data.data]);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    }
  };
  return (
    <div className="w-full">
      {error && <p className="text-red-400">{error}</p>}
      <form
        action=""
        onSubmit={handleAddCategory}
        className="flex flex-col items-center justify-center my-10"
      >
        <label htmlFor="category" className="text-xl font-semibold mb-2">
          Category
        </label>
        <div className="border-2 border-slate-800 w-1/2 rounded-lg h-10 overflow-hidden">
          <input
            value={category}
            type="text"
            className="w-[86.4%] h-full outline-none"
            name="category"
            id="category"
            placeholder="enter a category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <button className="bg-slate-900 text-white px-5 py-1 text-sm h-10">
            Submit
          </button>
        </div>
      </form>
      <div>
        {categories &&
          categories.map((cat: any) => (
            <div key={cat._id}>
              <p className="font-semibold">{cat.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategoryPage;

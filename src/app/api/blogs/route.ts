import BlogsModel from "@/models/blogsModels";
import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(request: NextRequest) {
  const jsonBody = await request.json();
  const { title, description, image, user, selectedCategory, time } = jsonBody;

  if (!title || !description) {
    return NextResponse.json(
      { message: "fail, title or description not availale" },
      { status: 404 }
    );
  }

  const newBlog = await BlogsModel.create({
    title,
    description,
    images: image,
    author: user,
    category: selectedCategory,
    time: time,
  });
  return NextResponse.json({ message: "success" }, { status: 201 });
}

export async function GET() {
  try {
    const blogs = await BlogsModel.find({})
      .populate("author")
      .select("-__v")
      .populate({
        path: "category",
        select: "category",
        model: "CategoryModel",
      });
    return NextResponse.json(
      { message: "success", blogsData: blogs },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "error message", error: err.message },
      { status: 500 }
    );
  }
}

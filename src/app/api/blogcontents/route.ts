import BlogsModel from "@/models/blogsModels";
import { connect } from "@/db/dbConfig";
import { NextResponse } from "next/server";

connect();
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

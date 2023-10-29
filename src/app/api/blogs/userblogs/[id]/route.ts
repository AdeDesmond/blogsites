import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/db/dbConfig";
import BlogsModel from "@/models/blogsModels";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id: author } = params;
    console.log(author);
    if (!author) throw new Error("No author found");
    const blogs = await BlogsModel.find({ author })
      .populate("author")
      .select("-__v");
    console.log(blogs);
    return NextResponse.json({ blogs });
  } catch (err: any) {
    return NextResponse.json(
      { message: "error message", error: err.message },
      { status: 500 }
    );
  }
}

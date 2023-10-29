import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/db/dbConfig";
import BlogsModel from "@/models/blogsModels";

connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id: _id } = params;
    const blog = await BlogsModel.findOne({ _id });
    return NextResponse.json(
      { message: "success", blogData: blog },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "error message", error: err.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id: _id } = params;
    const { title, description, image } = await request.json();
    const blog = await BlogsModel.findOneAndUpdate(
      { _id },
      { title, description, images: image },
      { new: true }
    );
    return NextResponse.json(
      { message: "success", blogData: blog },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "error message", error: err.message },
      { status: 500 }
    );
  }
}

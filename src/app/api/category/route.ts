import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/db/dbConfig";
import { CategoryModel } from "@/models/categoryModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    const { category } = jsonBody;
    const categoryDoc = await CategoryModel.create({ category });
    return NextResponse.json({
      message: "successfully created",
      data: categoryDoc,
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "error", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const categoryDoc = await CategoryModel.find();
    return NextResponse.json({
      message: "successfully created",
      data: categoryDoc,
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "error", error: err.message },
      { status: 500 }
    );
  }
}

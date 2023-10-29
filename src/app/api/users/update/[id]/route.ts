import UserModel from "@/models/userModels";
import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/db/dbConfig";

connect();
export async function PATCH(
  request: NextRequest,
  { params }: { params: string | any }
) {
  try {
    const { id: _id } = params;
    const jsonBody = await request.json();

    const { name, image } = jsonBody;
    const userUpdate = await UserModel.findOneAndUpdate(
      { _id },
      { image: image.image, name }
    );
    return NextResponse.json({ message: "successfully updated", userUpdate });
  } catch (err: any) {
    return NextResponse.json(
      { message: "error", error: err.message },
      { status: 500 }
    );
  }
}

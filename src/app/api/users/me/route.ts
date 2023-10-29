import { connect } from "@/db/dbConfig";
import UserModel from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(request: NextRequest) {
  try {
    const user = await UserModel.findOne({}).select(
      "-isVerified -isAdmin -createdAt -updatedAt -__v "
    );

    return NextResponse.json({ message: "user found", userData: user });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

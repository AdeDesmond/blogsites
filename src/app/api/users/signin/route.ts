import { connect } from "@/db/dbConfig";
import UserModel from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    const { email, password } = jsonBody;

    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const hashedPassword = await bcryptjs.compare(password, user.password);
    if (!hashedPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    const response = NextResponse.json(
      { message: "successfully sign", success: true },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

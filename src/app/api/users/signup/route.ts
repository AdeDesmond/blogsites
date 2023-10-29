import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/db/dbConfig";
import UserModel from "@/models/userModels";

connect();

export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();

    const { name, email, password } = jsonBody;

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "user already exist" },
        { status: 400 }
      );
    }

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "success",
      data: newUser,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { uploadFileUser } from "@/helpers/uploadUserFile";
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const image = await uploadFileUser(file as File);
    return NextResponse.json({ image });
  } catch (err: any) {
    return NextResponse.json(
      { message: "error message", error: err.message },
      { status: 500 }
    );
  }
}

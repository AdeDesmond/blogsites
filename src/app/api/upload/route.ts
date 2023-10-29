import { NextRequest, NextResponse } from "next/server";
import { uploadFile } from "@/helpers/uploadFile";

export async function POST(request: NextRequest) {
  const file = await request.formData();
  const imagesFile: FormDataEntryValue | null = file?.get("file");

  if (imagesFile) {
    const imagesData = await uploadFile(imagesFile as File);
    return NextResponse.json({
      message: "successfully uploaded",
      imagesDataLink: imagesData,
    });
  }
  return NextResponse.json({ message: "ok" });
}

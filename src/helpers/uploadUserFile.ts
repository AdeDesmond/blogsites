import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_API_KEY!
);

// Upload file using standard upload
async function uploadFileUser(file: File) {
  const imageName = `${Math.random()}-${file.name}`.replaceAll("-", "");

  const { data, error } = await supabase.storage
    .from("blog/users-images")
    .upload(imageName, file);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    const supabaseImage = `${process.env.SUPABASE_URL}/storage/v1/object/public/blog/users-images/${imageName}`;
    return supabaseImage;
  }
}

export { uploadFileUser };

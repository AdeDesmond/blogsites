import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";
import { revalidatePath } from "next/cache";

export const getUser = async function () {
  try {
    const res = await axios.get("/api/users/me");
    const user = await res.data.userData;
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err: Error | any) {
    console.log("error", err.message);
    throw new Error("something went wrong while fetching user data");
  }
};

export const logoutUser = async function () {
  try {
    await axios.get("/api/users/logout");
    toast.success("Logout Successful");
  } catch (err: Error | any) {
    console.log(err);
    throw new Error(err.message);
  }
  //redirect("/signin");
};

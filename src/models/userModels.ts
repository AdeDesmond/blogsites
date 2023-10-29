import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is a required field"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is a required field"],
      minlength: 8,
      select: false,
    },
    image: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const UserModel =
  mongoose.models?.UserModel || mongoose.model("UserModel", userSchema);

export default UserModel;

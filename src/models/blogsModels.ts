import mongoose from "mongoose";
import { CategoryModel } from "./categoryModel";
import UserModel from "./userModels";

const blogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Every blog should have a title"],
    },
    description: {
      type: String,
      required: [true, "Every blog should have a description"],
    },
    time: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CategoryModel,
    },
    images: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
    },
  },
  { timestamps: true }
);

blogsSchema.index({ author: 1 }, { unique: true });

const BlogsModel =
  mongoose.models?.BlogsModel || mongoose.model("BlogsModel", blogsSchema);

export default BlogsModel;

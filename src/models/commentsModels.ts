import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
  {
    comments: {
      type: String,
    },
    blogs: {
      type: mongoose.Types.ObjectId,
      ref: "BlogsModel",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { timestamps: true }
);
commentsSchema.index({ blogs: 1, user: 1 }, { unique: true });

const CommentsModel =
  mongoose.models?.CommentsModel ||
  mongoose.model("CommentsModel", commentsSchema);

export default CommentsModel;

/*
 createdAt: {
      type: Date,
      default: Date.now
    },

*/

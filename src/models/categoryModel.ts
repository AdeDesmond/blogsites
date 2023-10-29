import { Schema, model, models } from "mongoose";

const catergorySchema = new Schema(
  {
    category: {
      type: String,
      required: [true, "Every blog should have a category"],
    },
  },
  { timestamps: true }
);

const CategoryModel =
  models?.CategoryModel || model("CategoryModel", catergorySchema);

export { CategoryModel };

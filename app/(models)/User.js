import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    cover_image: { type: String, require: [true, "The image is required"] },
    title: { type: String, require: [true, "The title is required"] },
    description: {
      type: String,
      require: [true, "The description is required"],
    },
    project_url: {
      type: String,
      require: [true, "The project url is required"],
    },
    github_url: { type: String, require: [true, "The github url is required"] },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

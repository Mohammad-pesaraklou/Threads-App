import mongoose, { Schema } from "mongoose";

const UserModelSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    userName: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    bio: { type: String },
    threads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thread",
      },
    ],
    onboarded: {
      type: Boolean,
      default: false,
    },
    communities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
      },
    ],
  }
  // { _id: false }
);
const User = mongoose.models.User || mongoose.model("User", UserModelSchema);

export default User;

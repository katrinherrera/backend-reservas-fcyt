import mongoose from "mongoose";
const spaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    capacity: {
      type: Number,
    },
    minCapacity: {
      type: Number,
    },
    block: {
      type: String,
    },
    webaddress: {
      type: String,
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("spaces", spaceSchema);

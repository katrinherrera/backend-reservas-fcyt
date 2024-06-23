import mongoose from "mongoose"
 const bookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    capacity: {
      type: Number,
      
    },
    block: {
      type: String,
      
    },
    webaddress: {
      type: String,
      
    },
    name_teacher: {
      type: String,
      
    },
    date: {
      type: String,
      
    },
    day: {
      type: String,
      
    },
    schedule: {
        type: String,
        
    },
    slug: {
      type: String,
      lowercase: true,
    },
    dateschedule: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("books", bookSchema);




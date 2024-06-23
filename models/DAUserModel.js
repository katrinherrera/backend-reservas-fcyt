import mongoose from "mongoose"
 const DAUserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      
    },
    group: {
        type: String
        
    },
    subject: {
      type: String,
      lowercase: true,
    },
    N_students: {
      type: String
    },
    slug: {
        type: String
      },
  },
  { timestamps: true }
);

export default mongoose.model("DAUsers", DAUserSchema);



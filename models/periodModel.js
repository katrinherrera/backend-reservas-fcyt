import mongoose from "mongoose"
 const periodSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date_r_i: {
      type: String,
      
    },
    date_r_f: {
        type: String
        
    },
    date_e_i: {
      type: String
      
    },
    date_e_f: {
      type: String
      
    },
    slug: {
      type: String,
      lowercase: true,
    },
    role: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("periods", periodSchema);



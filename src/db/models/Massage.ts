import mongoose from "mongoose";

const MassageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    picture: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    district: {
      type: String,
      required: [true, "Please add a district"],
    },
    
    province: {
      type: String,
      required: [true, "Please add a province"],
    },
    tel: {
      type: String,
      required: [true, "Please add a telephone number"],
    },
    open: {
      type: String,
      required: [true, "Please add open time"],
      match: /^([01]\d|2[0-3]):([0-5]\d)$/, // HH:mm format
    },
    close: {
      type: String,
      required: [true, "Please add close time"],
      match: /^([01]\d|2[0-3]):([0-5]\d)$/, // HH:mm format
    },
    hourRate: {
      type: Number,
      required: [true, "Please add hour rate"],
    },
    
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


const Massage = mongoose.models.Massage || mongoose.model("Massage", MassageSchema)
export default Massage


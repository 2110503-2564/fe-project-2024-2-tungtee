import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  apptDate: {
    type: Date,
    required: true
  },
  user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
  },
  massage:{
      type: mongoose.Schema.ObjectId,
      ref: 'Massage',
      required: true
  },
  createdAt:{
      type: Date,
      default: Date.now 
  }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema)
module.exports = mongoose.model("Booking", BookingSchema);
export default Booking
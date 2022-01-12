const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    name: { type: String, },
    email: { type: String},
    phone: { type: String},
    checkin: { type: String},
    checkout:{type:String}
  }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;

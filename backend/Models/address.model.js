import mongoose from "mongoose";

const addressSchema = mongoose.Schema(
  {
    address_line: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
    },
    pincode: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    mobile: {
      type: Number,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const AddressModel = mongoose.model("address", addressSchema);

export default AddressModel;

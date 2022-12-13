import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: Number,
  user_id: mongoose.Types.ObjectId,
  description: String,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now },
  category_id: mongoose.Types.ObjectId,
});

export default new mongoose.model("Transaction", transactionSchema);

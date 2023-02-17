import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    date: Date,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("todo", todoSchema);
export default Todo;

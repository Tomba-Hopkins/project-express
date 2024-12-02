import mongoose from "mongoose";

const Schema = mongoose.Schema;

const quizSchema = new Schema({
  id_quiz: {
    type: String,
    unique: true,
    required: true,
  },
  quizes: [
    {
      question: {
        type: String,
        required: true,
      },
      a: {
        type: String,
        required: true,
      },
      b: {
        type: String,
        required: true,
      },
      c: {
        type: String,
        required: true,
      },
      d: {
        type: String,
        required: true,
      },
      correct: {
        type: String,
        required: true,
        enum: ["a", "b", "c", "d"],
      },
    },
  ],
  created: {
    type: Date,
    default: Date.now(),
    expires: 1800,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;

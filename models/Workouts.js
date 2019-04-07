const mongoose = require('mongoose');

const WorkoutsSchema = new mongoose.Schema(
  {
    nameOfExercise: String,
    set: Number,
    reps: Number,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: User,
    },
    comments: [
      {
        text: String,
        createdAt: { type: Date, default: Date.now },
        author: {
          type: mongoose.Schema.ObjectId,
          ref: User,
        },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Workouts', WorkoutsSchema);

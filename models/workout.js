const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {},
    exercises: [
        {
            type: "",
            name: "",
            duration: "",
            weight: "",
            reps: "",
            sets: "",
            distance: "",
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
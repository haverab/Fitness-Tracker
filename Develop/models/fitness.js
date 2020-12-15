const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type required"
            },

            name: {
                type: String,
                trim: true,
                required: "Name Required"
            },

            duration: {
                type: Number,
                required: "Length of exercise required"
            },

            distance: {

                type: Number
            },

            weight: {
                type: Number
            },

            sets: {
                type: Number
            },

            reps: {

                type: Number
            }
        }
    ]


},
    {
        toJSON: {
            virtuals: true
        }
    });

fitnessSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.duration
    }, 0);
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;


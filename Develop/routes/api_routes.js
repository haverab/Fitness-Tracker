const Workout = require("../models/fitness")

module.exports = (app) => {

    app.post("/api/workouts", (req, res) => {
        console.log(req.body)
        Workout.create(req.body)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
    });

    app.get("/api/workouts", (req, res) => {
        Workout.find(req.body)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find(req.body)
        .then((response) => {
            console.log(response)
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        })
    })
    //why use put instead of post??
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
        .then((response) => {
            console.log(response)
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
    })
}
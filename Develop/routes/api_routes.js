const Fitness = require("../models/fitness")

module.exports = (app) => {

    app.post("/api/fitness", (req, res) => {
        console.log(req.body)
        Workout.create(req.body)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
    });

    app.get("/api/fitness", (req, res) => {
        Fitness.find(req.body)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
    })

    app.get("/api/fitness/range", (req, res) => {
        Fitness.find(req.body)
        .then((response) => {
            console.log(response)
            res.json(response);
        })
        .catch((err) => {
            res.json(err);
        })
    })
    
    app.put("/api/fitness/:id", (req, res) => {
        Fitness.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
        .then((response) => {
            console.log(response)
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
    })
}
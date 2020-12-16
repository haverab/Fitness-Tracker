const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnessDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

require("./Develop/routes/api_routes.js")(app);
require("./Develop/routes/html_routes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


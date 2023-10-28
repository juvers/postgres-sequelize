const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to juvers application." });
// });

const db = require("./models");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
/* ===================
   Import Node Modules
=================== */
const env = require("./env");
const express = require("express"); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
const router = express.Router(); // Creates a new router object.
const mongoose = require("mongoose"); // Node Tool for MongoDB
const path = require("path"); // NodeJS Package for file paths

const bodyParser = require("body-parser"); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cors = require("cors"); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const port = process.env.PORT || 5000; // Allows heroku to set port
const dotenv = require("dotenv");
mongoose.Promise = global.Promise;

dotenv.config();
// Connecting to DataBase
mongoose.connect(
    process.env.DATABASE, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to the database");
        }
    }
);

// Middleware
app.use(cors({ origin: "http://localhost:4200" })); // Allows cross origin in development only
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + "/public")); // Provide static directory for frontend

//Route
const authentication = require("./routes/authentication")(router); // Import Authentication Routes
const blogs = require("./routes/blogs")(router); // Import Blog Routes

app.use("/authentication", authentication); // Use Authentication routes in application
app.use("/blogs", blogs); // Use Blog routes in application

// Connect server to Angular 2 Index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Start Server
app.listen(port, () => {
    console.log(`Listening on PORT ${port} in ${process.env.NODE_ENV} mode`);
});
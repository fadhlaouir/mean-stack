const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = 5000;

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

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
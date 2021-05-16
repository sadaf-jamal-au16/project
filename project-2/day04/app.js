require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const userRouter = require("./routes/user");
const campRouter = require("./routes/Campground");
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.engine("hbs", exphbs({ extname: "hbs", defaultLayout: "index" }));
app.set("view engine", "hbs");

const { DATABASE_URL } = process.env;

mongoose.connect(
    DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
    async(err) => {
        if (err) throw err;

        console.log("Connected");
    }
);
app.use("/user", userRouter);
app.use("/add", campRouter);
// home route
app.get("/", async(req, res) => {
    res.render("home");
});

app.listen(5000, () => console.log("Server Started"));
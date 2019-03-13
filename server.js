const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const usersRoutes = require("./routes/api/usersRoutes");
const profileRoutes = require("./routes/api/profileRoutes");
const postsRoutes = require("./routes/api/postsRoutes");

const app = express();

// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", usersRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/posts", postsRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));

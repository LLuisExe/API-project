var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");

var errorHandler = require("./utils/errorHandler")

var app = express();

var userRouter = require("./routers/user");
var publicationRouter = require("./routers/publication");
var serviceRouter = require("./routers/service");

var passport = require("passport");
require("./auth/auth");

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.authenticate("jwt", { session: false }))
app.use("/users", userRouter);
app.use("/publications", publicationRouter);
app.use("/services", serviceRouter);

app.use(authRouter);
app.use(errorHandler);



module.exports = app;
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
// const mongoose = require("mongoose");
const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");
const cors = require("cors"); 
const cookieSession = require("express-session"); 
const passport = require("passport");
const passportSetup = require("./passport"); 
const authRoute = require("./routes/auth")
// //config dotenv
dotenv.config();

// //connection mongodb
connectDB(); 
// mongoose.set("strictQuery", true);
// mongoose.connect(process.env.MONGO_URI);


const app = express();

app.use(
  cookieSession({
    secret: "Our little secret.",
    resave: true,
    saveUninitialized: true,
  })
); 

app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(passport.authenticate('session'));

app.use(cors({origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE", 
    credentials:true
})); 


// //middlewares
app.use(express.json());  
app.use(morgan("dev"));

// //route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

//static files 
// app.use(express.static(path.join(__)))

// if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
// } else {
  app.get("/", (req, res) => {
    res.send("<center><h1>Aditya Lahane</h1></center>");
  });
// }

app.use("/auth", authRoute); 

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
  );
});
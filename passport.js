
// const dotenv = require("dotenv");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const passport = require("passport");
// dotenv.config(); 
// const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose"); 
// const findOrCreate = require("mongoose-findorcreate");
// mongoose.set("strictQuery", true);
// mongoose.connect("mongodb://localhost:27017/userDB");


// const usergSchema = new mongoose.Schema({
//   email: String,
//   password: String, 
//   googleId:String,
// });

// usergSchema.plugin(passportLocalMongoose);
// usergSchema.plugin(findOrCreate);

// const Userg = new mongoose.model("Userg", usergSchema);

// passport.use(Userg.createStrategy()); 

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });
// passport.use(
//     new GoogleStrategy(
//       {
//         clientID: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         callbackURL: "/auth/google/callback",
//         userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//         // scope:["profile","email"],
//       },
//       function (accessToken, refreshToken, profile, cb) {
//         Userg.findOrCreate({ googleId: profile.id }, function (err, user) { return cb(
//           err,
//           user
//         );
//       });
//       }
//     )
//   ); 

 
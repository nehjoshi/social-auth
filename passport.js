const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy({
    clientID: process.env.G_CLIENT_ID,
    clientSecret: process.env.G_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

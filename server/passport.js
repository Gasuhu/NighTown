const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID="725876137721-2shg2eo340bb2cd2ep0bdnt56rguv78c.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)

  }
));

passport.serializeUser((user,done)=>
{
    done(null,user)
})
passport.deserializeUser((user,done)=>
{
    done(null,user)
})
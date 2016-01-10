
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {


    // pull in our app id and secret from our auth.js file
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:5000/auth/facebook/callback'
}

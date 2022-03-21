const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');

const User = require('../db/models/index').User;

passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]',
}, (email, password, done) => {
    User.findOne({
        where: {email}
    }).then((user) => {
        console.log('We got here!')
        console.log(user)
        if (!user || !user.validatePassword(password)) {
            console.log("Also here!")
            return done(null, false, {errors: {'email or password': 'is invalid'}});
        }
        return done(null, user);
    }).catch(done);
}));

// passport.use(new LocalStrategy(function verify(username, password, cb) {
//
//     db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, user) {
//         if (err) { return cb(err); }
//         if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
//
//         crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//             if (err) { return cb(err); }
//             if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
//                 return cb(null, false, { message: 'Incorrect username or password.' });
//             }
//             return cb(null, user);
//         });
//     });
// });

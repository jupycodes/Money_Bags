const express = require('express');
const router = express.Router();

const User = require('../../db/models/index').User;
const auth = require('../auth');
const passport = require("passport");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   User.findAll().then(user => {
//     res.status(200).send(JSON.stringify(user));
//   }).catch(err=>{
//     res.status(500).send('err')
//   });
// });

//POST new user route (optional, everyone has access)
router.post('/register', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  User.findOne({where:{email:user.email}}).then(existing_user => {
    if (existing_user){
      return res.status(422).json({
        errors: {
          email: 'exists'
        }
      })
    }else{
      User.create({
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
      }).then(new_user=>{
        new_user.setPassword(user.password);
        return new_user.save().then(() => res.json({ user: new_user.toAuthJSON() }));
      }).catch(err=>{
        return res.status(500).send(err);
      });
    }
  })
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }
    return res.status(400).send(info);
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;
  console.log(id);
  return User.findByPk(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }

        return res.json({ user: user.toAuthJSON() });
      });
});

module.exports = router;

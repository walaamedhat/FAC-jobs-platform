const express = require('express');
const router = express.Router();
const passport = require('passport');
const storeanswer = require('./formdata');
const studentProfile = require('./studentProfile');
const students = require('./students.js');
const settingsData = require('./settingsData.js');
const updataDataStudent = require('./updateDataStudent.js');

router.get('/auth/github',
  passport.authenticate('github',
    { scope: ['read:org'] })
);

router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req,res) => {
    if (req.authInfo==='admin ADDED') {
      res.redirect('/dashboard');

    } else if (req.authInfo==='user ADDED') {
      res.redirect('/form');
    } else if (req.authInfo==='user EXIST') {
      if (req.user.profile_url==='https://github.com/freelancedad') {
        res.redirect('/dashboard');

      } else {
        res.redirect(`/profile/${req.session.passport.user.name}`);
      }

    } else {
      res.redirect('/');

    }
  }
);

router.get('/current_user',(req,res) => {
  res.send(req.session.passport.user);
});

router.get('/api/logout',(req,res) => {
  req.logout();
  res.redirect('/');
});

router.post('/storeanswer', storeanswer.post);
router.get('/getdatausersettings', settingsData.get);

router.get('/getstudent/:student_name', studentProfile.get);

router.get('/students', students.get);

router.post('/updatedata', updataDataStudent.post);

module.exports = router;

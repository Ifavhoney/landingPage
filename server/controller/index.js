let express = require("express");
let router = express.Router();

module.exports.displayHome = (req, res, next) => {
  res.render("index", {
    title: "Home"
  })
}

module.exports.displayService = (req, res, next) => {
  res.render("index", {
    title: "Service"
  })
}
module.exports.sendEmail = (req, res, next) => {

}

module.exports.displayAboutUs = (req, res, next) => {
  res.render("index", {
    title: "AboutUs"
  })
}


module.exports.displayInbox = (req, res, next) => {
  res.render("index", {
    title: "Send a Mail"
  })
}



//NOT NECCESSARY ATM
//Login
module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      // server error?
      if (err) {
        return next(err);
      }
      // is there a user login error?
      if (!user) {
        return res.json({ success: false, msg: 'ERROR: Failed to Log In User!' });
      }
      req.logIn(user, (err) => {
        // server error?
        if (err) {
          return next(err);
        }

        const payload = {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          email: user.email
        }

        return res.json({
          success: true, msg: 'User Logged in Successfully!', user: {
            id: user._id,
            displayName: user.displayName,
            username: user.username,
            email: user.email
          }
        });


      });
    })(req, res, next);
}


module.exports.processRegisterPage = (req, res, next) => {
  // define a new user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.log("Error: User Already Exists!");
      }
      return res.json({ success: false, msg: 'ERROR: Failed to Register User!' });
    } else {
      // if no error exists, then registration is successful

      // redirect the user
      return res.json({ success: true, msg: 'User Registered Successfully!' });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({ success: true, msg: 'User Successfully Logged out!' });
};
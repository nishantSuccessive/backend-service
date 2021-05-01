const accessTokenSecret = require("./constant").accessTokenSecret;
const users = require("./constant").users;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');


const userModal = require('../Database/schema');

const alphNumericSpace = /^[A-Za-z\d\-_\s]*$/;
const alphaNumSpeSapce = /^[A-Za-z\d\-_!@#\$%\^\&*\):\(+=._-\s]*$/;
const emailRegex = /^[a-zA-Z0-9+_.-]+@successive.tech/;
// const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
// const alphaSpace = /^[A-Za-z\-_\s]*$/;
// const alpha = /^[A-Za-z]*$/;


class UserManagementController {

   async addUserDetals(req, res, next) {
    const { name, password, confirmPassword, email } = req.body;
    const saltRounds = 10;

    // Check Validations

    if (!alphNumericSpace.test(name)){
      res.status(400).send('Invalid Name')
      next()
    }
    if (!alphaNumSpeSapce.test(password) || password.length < 8){
      res.status(400).send('Invalid password')
      next()
    }
    if (!emailRegex.test(email)) {
      res.status(400).send('Invalid Email')
      next()
    }
    if (password !== confirmPassword) {
      res.status(400).send("Confirm password is not matched with password")
      next()
    }
        // Generate an access token
        const accessToken = jwt.sign({ name: name, password: password, confirmPassword: confirmPassword, email: email }, accessTokenSecret);

        bcrypt.genSalt(saltRounds, async function(err, salt) {
          bcrypt.hash(password, salt, async function(err, hash) {
              // Store hash in your password DB.
              const id = String(mongoose.Types.ObjectId())
              const user = userModal({
                _id: id,
                name,
                password: hash,
                confirmPassword: hash,
                email,
                originalId: id
              })
              await user.save()
          });
      });

        if (accessToken) {
          res.json({
            message: "User created",
            name,
            email,
            accessToken
        });
        next();
        } else {
          res.status(403).send('User is not created')
          next()
        }
    }

    updateUserDetals(req, res, next){
    res.send("Update user details")
    }

    async getUserDetails(req, res, next){
      const { name, email, password } = req.user;
      const result = await userModal.findOne({ name, email })
      if (result) {
        const { originalId, name, email, password: hashPassword } = result;

        // password decoded

        bcrypt.compare(password, hashPassword, function(err, isMatch) {
          if (err) {
            throw err
          } else if (!isMatch) {
            res.status(400).send("Password doesn't match!")
          } else {
            res.json({
              message: "User is found",
              originalId,
              name,
              email,
              password})
            console.log("Password matches!")
            next()
          }
        })

      } else {
        res.status(404).send("User Not Found")
      }    
    }

    authenticateJWT(req, res, next){
      const authHeader = req.headers.authorization;
      if (authHeader) {
          const token = authHeader.split(' ')[1];

          // jwt token verify

          jwt.verify(token, accessTokenSecret, (err, user) => {
              if (err) {
                  return res.status(403).send("Token is not matched");
              }
              req.user = user;
              next();
          });
      } else {
          res.status(401).send("Invalid Token");
      }
  };

}
module.exports =  UserManagementController;
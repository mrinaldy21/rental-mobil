const { user } = require("../models");
const { comparePwd } = require("../helper/bcrypt");
const { tokenGenerator } = require('../helper/jwt')


class UserController {
    static async register(req, res) {
        const { name, email, password, confpassword } = req.body;
        if(password !== confpassword) return res.status(401).json({msg: "Password dan Confirm Password tidak cocok"});
        try {
          if (email) {
            const checkEmail = await user.findOne({ where: { email } });
            if (checkEmail === email) {
              res.status(402).json({
                status: "error",
                msg: "Email already used, try different email",
              });
            }
        }
        await user.create({ name, email, password });
        res
        .status(201)
        .json({msg: "Register Berhasil"});
        } catch (error) {
          console.log(error);
        }
      }
      static async login(req, res) {
        const { email, password } = req.body;
        try {
          const userResult = await user.findOne({ where: { email } });
          if (userResult) {
            if (comparePwd(password, userResult.password)) {
              // let token = tokenGenerator(userResult)

                    res.status(200).json(userResult)
            } else {
              throw { message: "Email or password is not correct" };
            }
          } else {
            res
              .status(400)
              .json({ message: "A user with this email does not exist" });
          }
        } catch (error) {
          res.status(400).json(error);
        }
      }
}
                         
module.exports = UserController
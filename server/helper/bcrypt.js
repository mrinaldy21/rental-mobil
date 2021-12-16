const bcrypt = require('bcrypt');
const saltRound = +process.env.SALT_ROUND;

const encryptPwd = (pwd) => {
    return bcrypt.hashSync(pwd, saltRound)
}

const comparePwd = (pwd, hashPwd) => {
    return bcrypt.compareSync(pwd, hashPwd)
}

module.exports = {
    encryptPwd, comparePwd
}
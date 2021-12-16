const jwt = require('jsonwebtoken');
const secretKey = "bebas";

const tokenGenerator = (user) => {
    const { id, name, email, birthdate, gender, avatar, type } = user;
    const token = jwt.sign({
        id, name, email, birthdate, gender, avatar, type
    }, secretKey)
    return token
}

const tokenVerifier = (token) => {
    const decoded = jwt.verify(token, secretKey)
    return decoded
}

module.exports = {
    tokenGenerator,
    tokenVerifier
}
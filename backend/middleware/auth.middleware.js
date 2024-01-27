const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        try {
            const decoded = jwt.verify(token.split(" ")[1], "attryb");
            if (decoded) {
                req.body.dealerID = decoded.dealerID
                next()
            } else {
                res.send({ "msg": "Please Login!!" })
            }
        } catch (error) {
            res.send({ "err": error.message })
        }

    }
}

module.exports = {
    auth
}
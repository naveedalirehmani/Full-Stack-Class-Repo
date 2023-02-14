const crypto = require("crypto")

const HashPassword = (password) =>{
    const salt = crypto.randomBytes(32).toString('hex');

    const hash = crypto.pbkdf2Sync(password, salt, 2048, 32 , "sha512").toString("hex")

    return ` ${hash}:${salt}`

}


module.exports = {
    HashPassword
}


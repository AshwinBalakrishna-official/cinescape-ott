require('dotenv').config()

const env = {
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbDatabase: process.env.DB_DATABASE,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    secretKey: process.env.SECRET_KEY,
    emailId: process.env.EMAIL_ID,
    emailPwd: process.env.EMAIL_PASSWORD
}

module.exports = env
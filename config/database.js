require('dotenv').config()
module.exports = {
    host: 'localhost',
    dialect: process.env.DIALECT_DB,
    database: process.env.NAME_DB,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
    define: {
        timestamps: true,
        freezeTableName:true,
    },
}
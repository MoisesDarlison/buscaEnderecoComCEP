const connection = require("../../config/connection")
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt');

const user = connection.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
    },
    active: Sequelize.BOOLEAN,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    freezeTableName: true,
    hooks: {
        afterValidate: (user, options) => {
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 8) : "";
            }
        },

    },
})

module.exports = user;
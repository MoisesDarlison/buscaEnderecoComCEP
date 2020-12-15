const connection = require("../../config/connection")
const Sequelize = require('sequelize')
const user = require('./userModel')

const address = connection.define('enderecos', {
    zipCode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numberHome: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, {
    freezeTableName: true,
    timestamps: true,
})
user.hasMany(address, {
    foreignKey: 'userId'
});
address.belongsTo(user);

module.exports = address;
const address = require('../models/enderecoModel')

module.exports = {
    async create(req, res) {
        try {
            const { zipCode, street, numberHome, city, country } = req.body
            const userId = req.userIdJWT

            if (!numberHome || !zipCode) {
                return res.status(200).json('please insert the valid code and house number')
            }
            const newAddress = await address.create({
                userId,
                zipCode,
                street,
                numberHome,
                city,
                country,
            })
            return res.status(201).json(newAddress)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error.massage)
        }
    },
}
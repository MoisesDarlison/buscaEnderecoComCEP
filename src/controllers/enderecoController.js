const address = require('../models/enderecoModel')

module.exports = {
    async create(req, res) {
        try {
            const { zipCode, street, numberHome,city,country } = req.body
            const newAddress = await address.create({
                id: zipCode.concat(numberHome),
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
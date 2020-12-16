const address = require('../models/enderecoModel')

module.exports = {
    async create(req, res) {
        try {
            const userId = req.userIdJWT
            const newAddress = await address.create({
                userId,
                zipCode:req.zipcode,
                street:req.street,
                numberHome:req.houseNumber,
                city:req.city,
                country:'Brasil',
            })
            return res.status(201).json(newAddress)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error.massage)
        }
    },
}
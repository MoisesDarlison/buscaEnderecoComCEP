const user = require('../models/userModel.js')

module.exports = {
    async create(req, res) {
        try {
            const { name, password, email } = req.body
            const newUser = await user.create({
                name,
                password,
                email,
                active: true,
            })
            return res.status(201).json(newUser)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error.massage)
        }
    }
}
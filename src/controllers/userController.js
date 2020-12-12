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
    },
    async destroy(req, res) {
        try {
            const { id } = await req.params
            const userExist = await user.findOne({
                where: {
                    id: id,
                    active: true
                }
            })
            if (!userExist) {
                return res.status(400).json('User does not exist')
            }
            user.update(
                {
                    active: false
                },
                {
                   where:{  id: id}
                })
            return res.status(204).send()
        } catch (error) {
            console.log(error)
            return res.status(500).json(error.massage)
        }
    }
}
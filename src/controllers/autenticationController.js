const user = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = process.env.PASSWORD_USER_SECRET_KEY

module.exports = {
    async create(req, res) {
        try {
            const { email, password } = req.body
            const userData = await user.findOne(
                {
                    where: { email },
                    attributes: ['id', 'password'],
                });
            if (!userData) {
                return res.status(401).json({ erro: 'USER NOT FOUND' });
            }
            const validateUser = bcrypt.compareSync(password, userData.dataValues.password)
            
            if (!validateUser) {
                return res.status(401).json({ erro: 'ACCESS DENIED' });
            }

            const token = jwt.sign({ userId: userData.dataValues.id }, SECRET, { expiresIn: 3000000 })
            return res.status(200).json({ id: userData, token })

        } catch (e) {
            console.log(e);
            return res.status(500).json();
        }

    }
}
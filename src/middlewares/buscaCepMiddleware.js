const axios = require('axios');
const fetch = require('node-fetch');

module.exports = {
  async buscaCep(req, res, next) {
    const { zipcode, houseNumber } = req.body
    if (!zipcode || zipcode.length != 8 || !houseNumber) {
      return res.status(203).json('Please insert the valid code and houseNumber')
    }
    try {
      const { data } = await axios(`https://viacep.com.br/ws/${zipcode}/json/`)

      if (data.erro) {
        return res.status(401).json('please insert new zipcode, not localized')
      }

      req.zipcode = data.cep;
      req.street = data.logradouro;
      req.houseNumber = houseNumber;
      req.city = data.localidade;

    } catch (error) {
      console.log(error)
    }
    next()

  }
}

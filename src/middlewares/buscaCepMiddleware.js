const fetch = require('node-fetch');

module.exports = {
  async buscaCep(req, res, next) {
    const { zipcode, houseNumber } = req.body
    if (!zipcode || zipcode.length != 8 || !houseNumber) {
      return res.status(203).json('please insert the valid code and houseNumber')
    }
    try {
      const viacep = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);
      const results = await Promise.all([viacep.json()]);


      if(results[0].erro == true){
        return res.status(401).json('please insert new zipcode, not localized')
      }
      
      req.zipcode = results[0].cep;
      req.street = results[0].logradouro;
      req.houseNumber = houseNumber;
      req.city = results[0].localidade;
    } catch (error) {
      console.log(error)
    }

    next()
    //return res.status(200).json(results)
  }
}

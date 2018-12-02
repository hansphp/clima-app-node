const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=c9ff7566b0eae9b2aa4b90bfefee3b30`);

    return resp.data.main.temp
}

module.exports = {
    getClima
}
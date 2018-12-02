const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async() => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;

    } catch (e) {
        return ` No se pudo determinar el clima en ${ argv.direccion }`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))
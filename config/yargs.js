const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const complete = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente'
};

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


module.exports = {
    argv
}
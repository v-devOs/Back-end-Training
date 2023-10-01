const { crearArchivo } = require('./helpers/multiplicar')
require('colors')

const argv = require('./config/yargs')

console.clear()

const { base, listar, hasta } = argv;

crearArchivo( base, listar, hasta )
  .then( msg => console.log(msg.green) )
  .catch( err => console.log(err))

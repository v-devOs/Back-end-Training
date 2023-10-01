const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

const { base, listar } = argv;

crearArchivo( base, listar )
  .then( msg => console.log(msg) )
  .catch( err => console.log(err))

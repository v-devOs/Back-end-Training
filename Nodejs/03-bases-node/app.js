const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
  .option('b',{
    alias: "base",
    type: 'number',
    demandOption: true,


  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false
  })
  .check(( argv, options ) => {
    if(isNaN( argv.b )) throw 'La base tiene que ser un numero'

    return true;
  })
  .argv



console.clear()
console.log(argv)


const { base, listar } = argv;

crearArchivo( base, listar )
  .then( msg => console.log(msg) )
  .catch( err => console.log(err))

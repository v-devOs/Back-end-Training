const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv

console.clear()

console.log( argv )

console.log("base: yargs", argv.base)

// crearArchivo( base )
//   .then( msg => console.log(msg) )
//   .catch( err => console.log(err))

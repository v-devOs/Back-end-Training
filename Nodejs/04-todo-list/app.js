require('colors')

const { mostrarMenu, pause } = require('./helpers/mensajes')

const main = async() => {

  let opt = ''

  do {
    opt = await mostrarMenu()
    
    if( opt !== '0') await pause()
  } while ( opt !== '0');
  
}


main()
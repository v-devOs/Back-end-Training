const fs = require('fs')
require('colors')

const crearArchivo = async( base = 5, listar, hasta ) => {

  let salida = multiplicar( base, hasta )

  if( listar ){
    imprimirHeader(base)
    console.log(salida.yellow)
  }
  
  try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    return `tabla-${base}.txt creada correctamente`
  } catch (error) {
    throw `Error al crear el archivo tabla-${base}.txt`
  }

}

const imprimirHeader = ( base ) => {
  const header = `
  ========================
        Tabla del: ${base}
  ========================      
  `

  console.log(header.blue)
}

const multiplicar = ( base, hasta ) => {
  let salida = ''

  for (let index = 1; index <= hasta; index++) {
    salida += `${base} x ${ index } = ${ base * index}\n`;
  }

  return salida
}

module.exports = {
  crearArchivo
}


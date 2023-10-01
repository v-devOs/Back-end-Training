const fs = require('fs')

const crearArchivo = async( base = 5, listar ) => {

  let salida = multiplicar( base )

  if( listar ){
    imprimirHeader(base)
    console.log(salida)
  }
  
  try {
    fs.writeFileSync(`tabla-${base}.txt`, salida)
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

  console.log(header)
}

const multiplicar = ( base ) => {
  let salida = ''

  for (let index = 1; index <= 10; index++) {
    salida += `${base} x ${ index } = ${ base * index}\n`;
  }

  return salida
}

module.exports = {
  crearArchivo
}


const { nombres } = require('../data/nombres')
const { apellidos } = require('../data/apeliidos')

const generateRandomNames = () => {
  let namesGenerated = []

  while (namesGenerated.length < 20) {
    
    const person = {
      nombre: nombres[Math.floor(Math.random() * nombres.length)],
      primerApellido: apellidos[Math.floor(Math.random() * apellidos.length)],
      segundoApellido: apellidos[Math.floor(Math.random() * apellidos.length)],
      date: generateRandomDate(),
    }

    person.curp = generateCurpOrRfc( person.primerApellido, person.segundoApellido, person.nombre, person.date, true )
    person.rfc = generateCurpOrRfc( person.primerApellido, person.segundoApellido, person.nombre, person.date)

    namesGenerated.push(person)
  }

  return namesGenerated
}


const generateCurpOrRfc = ( 
    segundoApellido = ''.toLocaleUpperCase(), 
    primerApellido = ''.toLocaleUpperCase(), 
    nombre = ''.toLocaleUpperCase(), 
    date = '',
    generateCurp = false

  ) => {
  return generateCurp 
    ? `${primerApellido.charAt(0)}${getFirsVocal(primerApellido)}${segundoApellido.charAt(0)}${getFirsVocal(nombre)}${formatDate(date)}HGTLPRA5`
    : `${primerApellido.charAt(0)}${getFirsVocal(primerApellido)}${segundoApellido.charAt(0)}${getFirsVocal(nombre)}${formatDate(date)}X${Math.floor(Math.random() * 10) + 10}`
}



const getFirsVocal = ( dataUser = '') => {
  const vocals = ['A', 'E', 'I', 'O', 'U']
  const arraySurname = dataUser.toLocaleUpperCase().split('')

  let index = 0, seEcontroVocal = false, firstVocal = ''

  while ( index < arraySurname.length && !seEcontroVocal ) {    
    if( vocals.includes(arraySurname[index]) ){
      firstVocal = arraySurname[index]
      seEcontroVocal = true
    }
    index++;
  }

  return firstVocal
}



const formatDate = ( date = '') => {

  const arr = date.split('-')
  return `${arr[0]}${arr[1]}${arr[2].substring(1,3)}`
}

const generateRandomDate = () => {
  
  let alter = Math.floor(Math.random() * 10)

  const year = alter % 2 === 0 ? Math.floor(Math.random() * 15 ) + 1 : Math.floor(Math.random() * 50 )  + 49
  
  const month = (Math.floor(Math.random() * 11) + 1)
  let day = (Math.floor(Math.random() * 28) + 1 )

  if( day === 29 && month === 2 ) day = 28


  return `${day < 10 ? '0': ''}${day}-${ month < 10 ? '0' : '' }${month}-${ alter % 2 === 0 ? '20' : '19'}${ alter % 2 == 0 && year < 10 ? '0': ''}${year}`
}

module.exports = {
  generateRandomNames
}
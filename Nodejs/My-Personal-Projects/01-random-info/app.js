const { generateRandomNames } = require('./utils/generareRandomNames')
const main = () => {


  generateRandomNames().map( ({ 
    primerApellido, 
    segundoApellido, 
    nombre, 
    date, 
    rfc, 
    curp,
    email,
    password
  }) => console.log(`('${primerApellido}', '${segundoApellido}', '${nombre}', '${date}', '${rfc}', '${curp}, '${email}', '${password}'),`))
}


main()
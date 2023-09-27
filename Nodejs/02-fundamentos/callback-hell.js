const empleados = [
  {
    id: 1,
    nombre: 'Fernando'
  },
  {
    id: 2,
    nombre: 'Linda'
  },
  {
    id: 3,
    nombre: 'Karen'
  },
]

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  },
]

const id = 1


const getEmpleado = ( id, callback ) => {
  
  const empleado = empleados.find( e => e.id === id)

  return empleado 
    ? callback( null , empleado )
    : callback(`Empleado con id: ${id} no existe` )

}

const getSalario = ( id, callback ) => {

  const salario = salarios.find( s => s.id === id )

  return salario
    ? callback( null, salario )
    : callback( `Error al buscar salario con id: ${ id }` )

}


getEmpleado( id, ( err ,empleado ) => {

  if( err ) return console.log(err)

  getSalario( id, ( err, salario ) => {
    err 
      ? console.log(err)
      : console.log('El empleado', empleado,' tiene un salario de ', salario.salario)
  })

  
})
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


const getEmpleado = ( id, callback ) => {
  
  const empleado = empleados.find( e => e.id === id)

  return empleado 
    ? callback( null , empleado )
    : callback( true ,`Empleado con id: ${id} no existe`)

}


getEmpleado( 15, ( err ,empleado ) => {

  err 
    ? console.log( empleado )
    : console.log( empleado )
})
const getUsuarioByID = ( id, callback ) => {

  const usuario = {
    id,
    nombre: 'Uriel'
  }

  setTimeout( () => {
    callback( usuario )
  }, 1500)
}

getUsuarioByID( 10, (usuario) => {
  console.log(usuario)
})


import express from 'express'
import postgres from 'postgres'

const app = express()

const sql = postgres({
  host: 'pg_database',
  port: 5432,
  user: 'postgres',
  password: 'password'
})

app.get('/', async(_req, res) => {

  const resp = await sql`select 1 + 1`

  res.json({
    message: 'Hola mundo',
    consulta: resp
  })
})



app.listen(5000, async() => {
  console.log('Servidor en linea')
})
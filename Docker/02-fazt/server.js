import express from 'express'
import postgres from 'postgres'

const app = express()

const sql = postgres({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '123'
})






app.listen(3000, async() => {
  console.log('Servidor en linea')
  const resp = await sql`select 1 + 1`
  console.log(resp)
})
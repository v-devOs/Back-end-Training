
const fs = require('fs')
console.clear()

const base = 3

const header = `
========================
      Tabla del: ${base}
========================      
`

console.log(header)

let salida = ''


for (let index = 1; index <= 10; index++) {
  salida += `${base} x ${ index } = ${ base * index}\n`;
}

console.log(salida)

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if( err ) throw err

  console.log(`tabla-${base}.txt creada`)
})



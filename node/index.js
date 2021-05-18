const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const config = {
    host: "mysql",
    user: "root",
    password: "root",
    database: "nodedb"
}

const nomes = ["Antônio", "José", "Carlos", "Sérgio", "Aroldo", "Wesley", "Bruno"]

var randomNome = nomes[Math.floor(Math.random() * nomes.length)]

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people (nome) VALUES ('`+ randomNome +`')`

connection.query(sql)

app.get('/', (req,res) => {
    connection.query('SELECT * FROM people', function(err, rows) {
        if (err) throw err

        let nomes = "<h3>Nomes da tabela PEOPLE:</h3> "
        rows.forEach(function(nome, i) {
            nomes = nomes + "<p>" + nome.nome + "</p>"
        })
        res.send('<h1>Full Cycle Rocks!</h1>' + nomes)
        //res.send(rows)
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
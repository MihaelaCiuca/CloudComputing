const express = require('express')
const Sequelize = require('sequelize')
const axios = require('axios')
const {google} = require('googleapis')
const sheets = google.sheets('v4')
let sequelize

if(process.env.MYSQLCONNSTR_localdb) {
    let result = process.env.MYSQLCONNSTR_localdb.split(";")
    
    sequelize = new Sequelize(result[0].split("=")[1], result[2].split("=")[1], result[3].split("=")[1], {
        dialect: "mysql",
        host: result[1].split("=")[1].split(":")[0],
        port: result[1].split("=")[1].split(":")[1]
    })
} else {

const sequelize = new Sequelize('magazinedb', 'mihaelaciucabd', 'mihaelaciucabd', {
    dialect: "mysql",
    host: "localhost"
})
}
sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})

//Tabela Directors -definim modelul
const Magazine = sequelize.define('magazine', {
    //id: Sequelize.STRING,
    nume: Sequelize.STRING,
    adresa: Sequelize.STRING
})

//Tabela Movies-definim modelul
const Comenzi = sequelize.define('comenzi', {
    //id: Sequelize.INTEGER,
    produs: Sequelize.STRING,
    bucati: Sequelize.INTEGER,
    pret: Sequelize.INTEGER
})


const app = express()


//cream tabele folosind Sequelize
app.get('/createdb', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('tables created')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('could not create tables')
    })
})

app.use(express.json())
app.use(express.urlencoded())

//definire endpoint POST /magazine
app.post('/magazine', (request, response) => {
    Magazine.create(request.body).then((result) => {
        response.status(201).json(result)
    }).catch((err) => {
        console.log(err)
        response.status(500).send("resource not created")
    })
})


//definire endpoint GET/movies-pt toata lista de magazine
app.get('/magazine', (request, response) => {
    Magazine.findAll().then((results) => {
        response.status(200).json(results)
    })
})

//definire endpoint GET/id/magazine-poti cauta dupa un id
app.get('/magazine/:id', (request, response) => {
    Magazine.findByPk(request.params.id).then((result) => {
        if(result) {
            response.status(200).json(result)
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
})

//definire endpoint PUT/magazine
app.put('/magazine/:id', (request, response) => {
    Magazine.findByPk(request.params.id).then((magazine) => {
        if(magazine) {
            magazine.update(request.body).then((result) => {
                response.status(201).json(result)
            }).catch((err) => {
                console.log(err)
                response.status(500).send('database error')
            })
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
})

//definire endpoint DELETE/magazine
app.delete('/magazine/:id', (request, response) => {
    Magazine.findByPk(request.params.id).then((magazine) => {
        if(magazine) {
            magazine.destroy().then((result) => {
                response.status(204).send()
            }).catch((err) => {
                console.log(err)
                response.status(500).send('database error')
            })
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
})



//definire endpoint POST/comenzi
app.post('/comenzi', (request, response) => {
    Comenzi.create(request.body).then((result) => {
        response.status(201).json(result)
    }).catch((err) => {
        response.status(500).send("resource not created")
    })
})


//definire endpoint GET/movies-pt toata lista de filme
app.get('/comenzi', (request, response) => {
    Comenzi.findAll().then((results) => {
        response.status(200).json(results)
    })
})

//definire endpoint GET/id/comenzi-poti cauta dupa un id
app.get('/comenzi/:id', (request, response) => {
    Comenzi.findByPk(request.params.id).then((result) => {
        if(result) {
            response.status(200).json(result)
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
})


//definire endpoint PUT/comenzi
app.put('/comenzi/:id', (request, response) => {
    Comenzi.findByPk(request.params.id).then((comenzi) => {
        if(comenzi) {
            comenzi.update(request.body).then((result) => {
                response.status(201).json(result)
            }).catch((err) => {
                console.log(err)
                response.status(500).send('database error')
            })
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
})

//definire endpoint DELETE/comenzi
app.delete('/comenzi/:id', (request, response) => {
    Comenzi.findByPk(request.params.id).then((comenzi) => {
        if(comenzi) {
            comenzi.destroy().then((result) => {
                response.status(204).send()
            }).catch((err) => {
                console.log(err)
                response.status(500).send('database error')
            })
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
})


app.use('/', express.static('frontend'))
app.listen(8080)



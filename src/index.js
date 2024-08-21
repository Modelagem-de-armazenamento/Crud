const express = require("express")
const busca_controller = require("./controllers/busca") 
const cliente_controller = require("./controllers/cliente")
const funcionario_controller = require("./controllers/funcionario")
const app = express()
const port = 5001
app.use(express.json())


//GERENCIAMENTO DE BUSCA
app.post("/busca", (req, res) => {
    let busca = req.body
    let code = busca_controller.store(busca)
    res.status(code).json()
})

app.get("/busca", (req, res) => {
    res.json(busca_controller.index())

})

app.get("/busca/:id", (req, res) => {
    let busca = busca_controller.show(req.params.id)
    res.json(busca)
})

app.put("/busca/:id", (req, res) => {
    let busca = req.body
    let code = busca_controller.update(req.params.id, busca)
    res.status(code).json()
})

app.delete("/busca/:id", (req, res) => {
    busca_controller.destroy(req.params.id)
    res.json()
})


//FIM DO GERENCIAMENTO DE BUSCA

//GERENCIAMENTO DE FUNCIONARIO
app.post("/funcionario", (req, res) => {
    let funcionario = req.body
    let code = funcionario_controller.store(funcionario)
    res.status(code).json()
})

app.get("/funcionario", (req, res) => {
    res.json(funcionario_controller.index())

})

app.get("/funcionario/:id", (req, res) => {
    let funcionario = funcionario_controller.show(req.params.id)
    res.json(funcionario)
})

app.put("/funcionario/:id", (req, res) => {
    let funcionaro = req.body
    let code = funcionario_controller.update(req.params.id, funcionaro)
    res.status(code).json()
})

app.delete("/funcionario/:id", (req, res) => {
    funcionario_controller.destroy(req.params.id)
    res.json()
})

//FIM DO GERENCIAMENTO DE FUNCIONARIO

//GERENCIAMENTO DE CLIENTE
app.post("/cliente", (req, res) => {
    let cliente = req.body
    let code = cliente_controller.store(cliente)
    res.status(code).json()
})

app.get("/cliente", (req, res) => {
    res.json(cliente_controller.index())

})

app.get("/cliente/:id", (req, res) => {
    let cliente = cliente_controller.show(req.params.id)
    res.json(cliente)
})

app.put("/cliente/:id", (req, res) => {
    let cliente = req.body
    let code = cliente_controller.update(req.params.id, cliente)
    res.status(code).json()
})

app.delete("/cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("Gerenciador de distribuiçao executando na porta " + port)
})
//FIM DO GERENCIAMENTO DE CLIENTE"
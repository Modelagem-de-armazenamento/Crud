const express = require("express")
const veiculo_controller = require("./controllers/veiculo") 
const cliente_controller = require("./controllers/cliente")
const funcionario_controller = require("./controllers/funcionario")
const carga_controller = require("./controllers/carga.js");
const endereco_controller = require("./controllers/endereco.js");
const fornecedor_controller = require("./controllers/fornecedor.js");
const app = express()
const port = 5001
app.use(express.json())


//GERENCIAMENTO DE veiculo
app.post("/veiculo", (req, res) => {
    let veiculo = req.body
    let code = veiculo_controller.store(veiculo)
    res.status(code).json()
})

app.get("/veiculo", (req, res) => {
    res.json(veiculo_controller.index())

})

app.get("/veiculo/:id", (req, res) => {
    let veiculo = veiculo_controller.show(req.params.id)
    res.json(veiculo)
})

app.put("/veiculo/:id", (req, res) => {
    let veiculo = req.body
    let code = veiculo_controller.update(req.params.id, veiculo)
    res.status(code).json()
})

app.delete("/veiculo/:id", (req, res) => {
    veiculo_controller.destroy(req.params.id)
    res.json()
})


//FIM DO GERENCIAMENTO DE veiculo

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

//GERENCIAMENTO DE CARGA
app.post("/carga", (req, res) => {
  let carga = req.body;
  let code = carga_controller.store(carga);
  res.status(code).json();
});

app.get("/carga", (req, res) => {
  res.json(carga_controller.index());
});

app.get("/carga/:id", (req, res) => {
  res.json(carga_controller.show(req.params.id));
});

app.put("/carga/:id", (req, res) => {
  let carga = req.body;
  let code = carga_controller.update(req.params.id, carga);
  res.status(code).json();
});

app.delete("/carga/:id", (req, res) => {
  res.json(carga_controller.destroy(req.params.id));
});
//FIM DO GERENCIAMENTO DE CARGA

//GERENCIAMENTO DE ENDEREÇO
app.post("/endereco", (req, res) => {
  let endereco = req.body;
  let code = endereco_controller.store(endereco);
  res.status(code).json();
});

app.get("/endereco", (req, res) => {
  res.json(endereco_controller.index());
});

app.get("/endereco/:id", (req, res) => {
  res.json(endereco_controller.show(req.params.id));
});

app.put("/endereco/:id", (req, res) => {
  let endereco = req.body;
  let code = endereco_controller.update(req.params.id, endereco);
  res.status(code).json();
});

app.delete("/endereco/:id", (req, res) => {
  res.json(endereco_controller.destroy(req.params.id));
});
//FIM DO GERENCIAMENTO DE ENDEREÇO

//GERENCIAMENTO DE FORNECEDOR
app.post("/fornecedor", (req, res) => {
  let fornecedor = req.body;
  let code = fornecedor_controller.store(fornecedor);
  res.status(code).json();
});

app.get("/fornecedor", (req, res) => {
  res.json(fornecedor_controller.index());
});

app.get("/fornecedor/:id", (req, res) => {
  res.json(fornecedor_controller.show(req.params.id));
});

app.put("/fornecedor/:id", (req, res) => {
  let fornecedor = req.body;
  let code = fornecedor_controller.update(req.params.id, fornecedor);
  res.status(code).json();
});

app.delete("/fornecedor/:id", (req, res) => {
  res.json(fornecedor_controller.destroy(req.params.id));
});
//FIM DO GERENCIAMENTO DE FORNECEDOR
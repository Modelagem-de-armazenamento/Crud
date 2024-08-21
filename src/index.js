const express = require("express");
const carga_controller = require("./controllers/carga.js");
const endereco_controller = require("./controllers/endereco.js");
const fornecedor_controller = require("./controllers/fornecedor.js");
const app = express();
const port = 5000;
app.use(express.json());

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
  res.status().json();
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

app.listen(port, () => {
  console.log("Gerenciador de armazenamento executado na porta: " + port);
});

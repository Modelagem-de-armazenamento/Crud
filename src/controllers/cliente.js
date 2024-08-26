const funcionario_controller = require("./funcionario.js")
const clientes = [];
let nextId = 1;

const model = (cliente, id = nextId++) => {
  if (
    cliente.nome != "" &&
    cliente.nome != undefined &&
    cliente.funcionario_id != undefined &&
    funcionario_controller.show(cliente.funcionario_id)
  ) {
    return {
      id,
      nome: cliente.nome,
      funcionario_id: parseInt(cliente.funcionario_id)
     } 
  }
}  

const store = (body) => {
  const novo = model(body);

  if (novo) {
    clientes.push(novo);
    return 201;
  }

  return 400;
};

const index = () => clientes;

const show = (id) => clientes.find((el) => el.id == id);

const update = (id, body) => {
  const index =cliente.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    clientes[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = clientes.findIndex((el) => el.id == id);

  if (index != -1) {
    clientes.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
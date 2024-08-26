const veiculo_controller = require("./veiculo.js")
const funcionarios = [];
let nextId = 1;

const model = (funcionario, id = nextId++) => {
  if (
    funcionario.nome != "" &&
    funcionario.nome != undefined &&
    funcionario.categoria != "" && 
    funcionario.categoria != undefined &&
    funcionario.veiculo_id != undefined &&
    veiculo_controller.show(funcionario.veiculo_id)
  ) {
    return {
      id,
      nome: funcionario.nome,
      categoria: funcionario.categoria,
      veiculo_id: parseInt(funcionario.veiculo_id)
     } 
  }
}  
const store = (body) => {
  const novo = model(body);

  if (novo) {
    funcionarios.push(novo);
    return 201;
  }

  return 400;
};

const index = () => funcionarios;

const show = (id) => funcionarios.find((el) => el.id == id);

const update = (id, body) => {
  const index =funcionarios.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    funcionarios[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = funcionarios.findIndex((el) => el.id == id);

  if (index != -1) {
    funcionarios.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
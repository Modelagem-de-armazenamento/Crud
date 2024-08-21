const carga_controller = require("./carga.js");
const enderecos = [];
let ultimoId = 1;

const model = (endereco, id = ultimoId++) => {
  if (
    endereco.nome != "" &&
    endereco.nome != undefined &&
    endereco.carga_id != undefined &&
    carga_controller.show(endereco.carga_id)

  ) {
    return {
      id,
      nome: endereco.nome,
      carga_id: parseInt(endereco.carga_id),
    };
  }
};

const store = (body) => {
  let novo = model(body);
  if (novo) {
    enderecos.push(novo);
    return 201;
  }
  return 400;
};

const index = () => enderecos;

const show = (id) => enderecos.find((el) => el.id == id);

const update = (id, body) => {
  let index = enderecos.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  if (novo && index != -1) {
    enderecos[index] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let index = enderecos.findIndex((el) => el.id == id);
  if (index != -1) {
    enderecos.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};

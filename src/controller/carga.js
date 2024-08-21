const fornecedor_controller = require("./fornecedor.js");
const cargas = [];
let ultimoId = 1;

const model = (carga, id = ultimoId++) => {
  if (
    carga.nome != "" &&
    carga.nome != undefined &&
    carga.categoria != "" &&
    carga.categoria != undefined &&
    carga.fornecedor_id != undefined &&
    fornecedor_controller.show(carga.fornecedor_id)
  ) {
    return {
      id,
      nome: carga.nome,
      categoria: carga.categoria,
      fornecedor_id: parseInt(carga.fornecedor_id),
    };
  }
};

const store = body => {
  let novo = model(body);
  if (novo) {
    cargas.push(novo);
    return 201;
  }
  return 400;
};

const index = () => cargas;

const show = (id) => cargas.find((el) => el.id == id);

const update = (id, body) => {
  let index = cargas.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  if (novo && index != -1) {
    cargas[index] = novo;
    return 200;
  }
  return 400;
};

const destroy = id => {
  let index = cargas.findIndex((el) => el.id == id);
  if (index != -1) {
    cargas.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};

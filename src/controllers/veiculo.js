const veiculos = [];
let nextId = 1;

const model = (veiculo, id = nextId++) => {
  if (veiculo.nome != undefined && veiculo.nome != "") {
    return {
      id,
      nome: veiculo.nome,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    veiculos.push(novo);
    return 201;
  }

  return 400;
};

const index = () => veiculos;

const show = (id) => veiculos.find((el) => el.id == id);

const update = (id, body) => {
  const index =veiculos.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    veiculos[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = veiculos.findIndex((el) => el.id == id);

  if (index != -1) {
    veiculos.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
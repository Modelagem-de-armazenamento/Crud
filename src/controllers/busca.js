const buscas = [];
let nextId = 1;

const model = (busca, id = nextId++) => {
  if (busca.nome != undefined && busca.nome != "") {
    return {
      id,
      nome: busca.nome,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    buscas.push(novo);
    return 201;
  }

  return 400;
};

const index = () => buscas;

const show = (id) => buscas.find((el) => el.id == id);

const update = (id, body) => {
  const index =buscas.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    buscas[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = buscas.findIndex((el) => el.id == id);

  if (index != -1) {
    buscas.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
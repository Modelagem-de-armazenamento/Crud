const cliente = [];
let nextId = 1;

const model = (cliente, id = nextId++) => {
  if (cliente.nome != undefined && cliente.nome != "") {
    return {
      id,
      nome: cliente.nome,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    cliente.push(novo);
    return 201;
  }

  return 400;
};

const index = () => cliente;

const show = (id) => cliente.find((el) => el.id == id);

const update = (id, body) => {
  const index =cliente.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    cliente[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = cliente.findIndex((el) => el.id == id);

  if (index != -1) {
    cliente.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
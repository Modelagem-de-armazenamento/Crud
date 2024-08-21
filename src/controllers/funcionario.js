const funcionario = [];
let nextId = 1;

const model = (funcionario, id = nextId++) => {
  if (funcionario.nome != undefined && funcionario.nome != "") {
    return {
      id,
      nome: funcionario.nome,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    funcionario.push(novo);
    return 201;
  }

  return 400;
};

const index = () => funcionario;

const show = (id) => funcionario.find((el) => el.id == id);

const update = (id, body) => {
  const index =funcionario.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    funcionario[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = funcionario.findIndex((el) => el.id == id);

  if (index != -1) {
    funcionario.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
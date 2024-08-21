const fornecedores = [];
let ultimoId = 1;

const model = (fornecedor, id = ultimoId++) => {
  if (fornecedor.nome != "" && fornecedor.nome != undefined) {
    return {
      id,
      nome: fornecedor.nome,
    };
  }
};

const store = (body) => {
  let novo = model(body);
  if (novo) {
    fornecedores.push(novo);
    return 201;
  }
  return 400;
};

const index = () => fornecedores;

const show = (id) => fornecedores.find((el) => el.id == id);

const update = (id, body) => {
  let index = fornecedores.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  if (novo && index != -1) {
    fornecedores[index] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let index = fornecedores.findIndex((el) => el.id == id);
  if (index != -1) {
    fornecedores.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};

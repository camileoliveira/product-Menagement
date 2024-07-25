const prompt = require("prompt-sync")();
const arrProduct = require("./arrProducts");

function removeProduct() {
  const idRemove = prompt("Qual id do produto você quer remover? ");

  const i = arrProduct.findIndex((product) => product.id == idRemove);
  if (i !== -1) {
    arrProduct.splice(i, 1);
    console.log(`Removido: Id ${idRemove} - ${arrProduct[i].name}`);
  }
}

module.exports = removeProduct
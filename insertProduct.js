const prompt = require("prompt-sync")();3
const arrProduct = require("./arrProducts");

function insertProduct() {
  let id = arrProduct.length + 1;
  let name = prompt("Nome: ");
  let category = prompt("Categoria: ");
  let price = prompt("Preço: ");
  let stock = prompt("Estoque: ");

  const objectProduct = {
    id: id,
    name: name,
    category: category,
    price: price,
    stock: stock,
  };

  arrProduct.push(objectProduct);
}

module.exports = insertProduct

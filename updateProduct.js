const arrProduct = require("./arrProducts");
const prompt = require("prompt-sync")();

function updateProduct() {
  let idChange = prompt("Qual id do produto que você quer alterar? ");

  const i = arrProduct.findIndex((product) => product.id == idChange);

  if (i !== -1) {
    const question = prompt("Qual dado você quer alterar? ");

    if (question == "Nome") {
      const newName = "Nome: ";
      arrProduct[i].name = newName;
    }

    if (question == "Categoria ") {
      const newCategory = prompt("Categoria: ");
      arrProduct[i].category = newCategory;
    }

    if(question == "Preço"){
        const newPrice = prompt("Preço: ")
        arrProduct[i].price = newPrice;
    }

    if(question == "Estoque"){
        const newStock = prompt("Estoque: ")
        arrProduct[i].stock = newStock
    }
  }
}

module.exports = updateProduct
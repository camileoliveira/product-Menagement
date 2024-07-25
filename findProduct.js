const prompt = require("prompt-sync")();
const arrProduct = require("./arrProducts");

function findProduct() {
  const question = prompt(`Por qual categoria você quer buscar?
        1. Nome
        2. Categoria
        3. Preço
        4. Estoque`);

  let productFilter;

  if (question == "1") {
    let nameProduct = prompt("Nome do produto: ");
    productFilter = arrProduct.filter((product) => product.name == nameProduct);
  }
  if (question == "2") {
    let categoryProduct = prompt("Categoria do produto: ");
    productFilter = arrProduct.filter(
      (product) => product.category == categoryProduct
    );
  }
  if (question == "3") {
    let priceProduct = prompt("Preço: ");
    productFilter = arrProduct.filter(
      (product) => product.price == priceProduct
    );
  }
  if (question == "4") {
    let stockProduct = prompt("Estoque: ");
    productFilter = arrProduct.filter(
      (product) => product.stock == stockProduct
    );
  }
}

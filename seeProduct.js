const arrProducts = require("./arrProducts");

function seeProduct() {
  arrProducts.forEach((product) => {
    console.log(`Id: ${product.id}, Nome: ${product.name}, Categoria: ${product.category}, Preço: ${product.price}, Estoque: ${product.stock}`);
  });
}

module.exports = seeProduct;

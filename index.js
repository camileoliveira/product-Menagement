const prompt = require("prompt-sync")();
const arrProduct = require("./arrProducts");
const seeProduct = require("./seeProduct");
const insertProduct = require("./insertProduct");
const updateProduct = require("./updateProduct");
const removeProduct = require("./removeProduct");


function mainMenu() {
  option = prompt(`
    1. Listar produtos
    2. Inserir novo produto
    3. Atualizar
    4. Remover 
    5. Buscar
    6. Sair
    `);

  while (option != "6") {
    if (option == "1") {
      seeProduct();
    }
    if (option == "2") {
      insertProduct();
    }
    if (option == "3") {
      updateProduct();
    }
    if (option == "4") {
      removeProduct();
    }
    if (option == "5") {
      findProduct();
    }
    option = prompt(`
        1. Listar produtos
        2. Inserir novo produto
        3. Atualizar
        4. Remover 
        5. Buscar
        6. Sair
        `);
  }
}
mainMenu();

function pesquisaBinaria(lista, item) {
  let baixo = 0;
  let alto = lista.length - 1;

  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2);
    const chute = lista[meio];

    if (chute === item) {
      return meio;
    }

    if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }

  return -1;
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elementoProcurado = 7;

const resultado = pesquisaBinaria(lista, elementoProcurado);

if (resultado !== -1) {
  console.log(
    `O elemento ${elementoProcurado} foi encontrado no índice ${resultado}.`
  );
} else {
  console.log(`O elemento ${elementoProcurado} não foi encontrado na lista.`);
}

function pesquisaBinariaPorChave(lista, chave, valor) {
  let baixo = 0;
  let alto = lista.length - 1;

  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2);
    const elemento = lista[meio];

    if (elemento[chave] === valor) {
      return meio; // Retorna o índice do elemento se encontrado.
    }

    if (elemento[chave] > valor) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }

  return -1; // Retorna -1 se o elemento não for encontrado na lista.
}

// Exemplo de uso com uma lista de objetos
const listaDeObjetos = [
  { hello: 1, other: "a" },
  { hello: 2, other: "b" },
  { hello: 3, other: "c" },

  { hello: 100, other: "z" },
];

const chaveProcurada = "hello";
const valorProcurado = 3;

const resultadoPorChave = pesquisaBinariaPorChave(
  listaDeObjetos,
  chaveProcurada,
  valorProcurado
);

if (resultadoPorChave !== -1) {
  console.log(
    `O elemento com ${chaveProcurada} igual a ${valorProcurado} foi encontrado no índice ${resultado}.`
  );
} else {
  console.log(
    `Nenhum elemento com ${chaveProcurada} igual a ${valorProcurado} foi encontrado na lista.`
  );
}

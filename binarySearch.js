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

function pesquisaLinear(lista, item) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === item) {
      return i;
    }
  }
  return -1;
}

function pesquisaBinaria(lista, item) {
  // Inicializa as variáveis 'baixo' e 'alto' para representar o intervalo de busca na lista.
  let baixo = 0;
  let alto = lista.length - 1;

  // Enquanto o intervalo de busca não estiver vazio:
  while (baixo <= alto) {
    // Calcula o índice do meio do intervalo arredondando para baixo, se necessário.
    const meio = Math.floor((baixo + alto) / 2);

    // Obtém o valor no índice do meio, conhecido como "chute".
    const chute = lista[meio];

    // Verifica se o "chute" é igual ao item que estamos procurando.
    if (chute === item) {
      // Se for igual, retornamos o índice do meio como o resultado da busca bem-sucedida.
      return meio;
    }

    // Se o "chute" for maior que o item, ajusta o índice 'alto' para buscar na metade inferior.
    if (chute > item) {
      alto = meio - 1;
    } else {
      // Se o "chute" for menor que o item, ajusta o índice 'baixo' para buscar na metade superior.
      baixo = meio + 1;
    }
  }

  // Se o loop terminar e o item não for encontrado, retorna -1 indicando que o item não está na lista.
  return -1;
}

// Criando uma lista grande de números ordenados
const listaDeNumeros = [];
for (let i = 0; i < 1000000; i++) {
  listaDeNumeros.push(i);
}

// Definindo o elemento a ser pesquisado
const elementoProcuradoSe = 500000;

// Medindo o tempo da pesquisa linear
console.time("Pesquisa Linear");
const indiceLinear = pesquisaLinear(listaDeNumeros, elementoProcuradoSe);
console.timeEnd("Pesquisa Linear");

// Medindo o tempo da pesquisa binária
console.time("Pesquisa Binária");
const indiceBinario = pesquisaBinaria(listaDeNumeros, elementoProcuradoSe);
console.timeEnd("Pesquisa Binária");

// Exibindo os resultados
console.log("Índice encontrado pela pesquisa linear:", indiceLinear);
console.log("Índice encontrado pela pesquisa binária:", indiceBinario);

// Função para busca linear em um array de objetos
function buscaLinear(array, nome) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].nome === nome) {
      return i; // Retorna o índice se encontrar
    }
  }
  return -1; // Retorna -1 se não encontrar
}

// Função para busca binária em um array de objetos ordenados por nome
function buscaBinaria(array, nome) {
  let baixo = 0;
  let alto = array.length - 1;

  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2);
    const objetoMeio = array[meio];

    if (objetoMeio.nome === nome) {
      return meio; // Retorna o índice se encontrar
    }

    if (objetoMeio.nome > nome) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }

  return -1; // Retorna -1 se não encontrar
}

// Criar um array de objetos para teste (ordenado por nome para a busca binária)
const arrayDeObjetos = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Leo", idade: 28 },
  { nome: "Zoe", idade: 22 },
];
console.time("Pesquisa Linear");
const resultadoLinear = buscaLinear(arrayDeObjetos, "Leo");
console.log(arrayDeObjetos[resultadoLinear]);
console.timeEnd("Pesquisa Linear");

console.time("Pesquisa binaria");
const resultadoBinario = buscaBinaria(arrayDeObjetos, "Leo");
console.log(arrayDeObjetos[resultadoBinario]);
console.timeEnd("Pesquisa binaria");

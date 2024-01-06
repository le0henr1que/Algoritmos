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

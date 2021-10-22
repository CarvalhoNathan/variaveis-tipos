function substituiPares(array) {
  if(!array) return -1; // Verifica se o array existe
  if(!array.length) return -1; // Verifica se o array tem o length

  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      console.log("Você já é zero!!")
    } else if (array[i] % 2 === 0) { // === Comparação
      console.log(`Substituindo ${array[i]} por 0...`);
      array[i] = 0; // = Atribuição
    }
  }

  return array;
}

let arr =[1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));
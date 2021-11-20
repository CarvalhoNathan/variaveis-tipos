# Minhas anotações sobre o curso ```Variáveis e Tipos``` 📋

## Aula 1 - Atribuição de Valores

| Case Type | Exemplos |
| --- | ----------- |
| Original Variable as String | some awesome var |
| Camel Case | someAwesomeVar |
| Snake Case | some_awesome_var |
| Kebab Case | some-awesome-var |
| Pascal Case | SomeAwesomeVar |
| Upper Case Snake Case | SOME_AWESOME_VAR |

##  Var e let

### Var:

- Escopo global ou local
- Possuí redeclaração, reatribuição e hoisting ✔

### Let:

- Escopo em bloco
- Possuí reatribuição ✔
- Não faz redeclaração e hoisting ❌

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
	let b = 22; // the scope is inside the if-block
	
  console.log(a); // 11
	console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

## Constantes

- Declarada em ``SNAKE_UPPER_CASE``
- Escopo em bloco
- Não faz redeclaração, reatribuição e hoisting ❌

```js
const DAYS_IN_A_WEKK = 7;
const MY_NAME = "Nathan";
```

## Atividades práticas

### Atividade 1

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

*Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa (Ex: raiar, ama, ovo, radar).*

[➡ Exercício palindromo.js](https://github.com/CarvalhoNathan/variaveis-tipos/blob/main/arrayPares.js)

### Atividade 2

Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo:

```js
Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]
```

```js
Input -> []
Output -> -1
```

[➡ Exercício arrayPares.js](https://github.com/CarvalhoNathan/variaveis-tipos/blob/main/arrayPares.js)

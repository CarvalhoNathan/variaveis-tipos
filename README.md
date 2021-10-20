
# Variáveis e Tipos 📋

### Atribuição de Valores - Aula 1

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

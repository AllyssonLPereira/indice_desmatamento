# Analisador de Desmatamento por Década

Este projeto contém uma função em JavaScript para analisar dados de desmatamento por década, agrupando valores e calculando totais e médias.

## 📜 Descrição

A função `analisarDesmatamentoPorDecada(data)` recebe uma lista de pares `[ano, valor]`, onde `ano` representa o ano da medição e `valor` indica a quantidade de desmatamento registrada. A função agrupa os dados por década e calcula o total e a média do desmatamento para cada período.

## 📌 Estrutura do Código

A função executa as seguintes etapas:
1. Define um objeto com intervalos de décadas predefinidos.
2. Percorre a lista de dados, distribuindo os valores nas respectivas décadas.
3. Filtra as décadas que possuem dados registrados.
4. Calcula o total e a média de desmatamento para cada década.
5. Retorna um array com objetos representando os resultados.

## 📊 Exemplo de Uso

```javascript
const dados = [[2010, 10], [1995, 5], [2005, 58], [2013, 64]];
console.log(analisarDesmatamentoPorDecada(dados));


/* 
Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

// create array
const stringsArray = ['pippo', 'PLUTO', 'PaperinO'];


// create array formatted to lower case
const formattedString = stringsArray.map((string) => {
   const formatter = string.toLowerCase();
   return formatter.charAt(0).toUpperCase() + formatter.slice(1);
});

// log final string array elements
formattedString.forEach(string => {
   console.log(string);
   
});
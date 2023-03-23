/* 
Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

// create array
const stringsArray = ['pippo', 'PLUTO', 'PaperinO'];


// create array formatted to lower case
const formatter = stringsArray.map((string) => {
  return string.toLowerCase();
});

// create array formatted to upper case onli the char in position '0'
const finalString = formatter.map((toFormat) => {
   return toFormat.charAt(0).toUpperCase() + toFormat.slice(1);
})

// log final string array elements
finalString.forEach(string => {
   console.log(string);
   
});
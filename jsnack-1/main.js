/* 
Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

// create array cars
const cars = [

   {
      marca: 'Ferrari',
      modello: 'Purosangue',
      alimentazione: 'benzina'
   },
   {
      marca: 'Lamborghini',
      modello: 'Aventador',
      alimentazione: 'benzina'
   },
   {
      marca: 'Tesla',
      modello: 'Model Y',
      alimentazione: 'elettrico'
   },
   {
      marca: 'Fiat',
      modello: 'Panda',
      alimentazione: 'gpl'
   },
   {
      marca: 'Audi',
      modello: 'A6',
      alimentazione: 'diesel'
   },
   {
      marca: 'Suzuki',
      modello: 'Jimny',
      alimentazione: 'diesel'
   },
   {
      marca: 'Renault',
      modello: 'Clio',
      alimentazione: 'metano'
   },
   {
      marca: 'Wolkswagen',
      modello: 'Polo',
      alimentazione: 'metano'
   },
   {
      marca: 'Fiat',
      modello: 'Punto',
      alimentazione: 'gpl'
   },
   {
      marca: 'Nissan',
      modello: 'Leaf',
      alimentazione: 'elettrico'
   },
];

// sort cars (benzina) in a new array 
const carBenzina = cars.filter((car) => {
   if (car.alimentazione == 'benzina') {
      return true;
   }
   return false;
})

// sort cars (diesel) in a new array 
const carDiesel = cars.filter((car) => {
   if (car.alimentazione == 'diesel') {
      return true;
   }
   return false;
})

// sort cars (not benzina && not diesel) in a new array 
const carOthers = cars.filter((car) => {
   if (car.alimentazione != 'diesel' && car.alimentazione != 'benzina') {
      return true
   }
   return false;
})

carBenzina.forEach(car => {

   console.log(`Machine a benzina: ${car.marca} ${car.modello}`);
   
});

carDiesel.forEach(car => {

   console.log(`Machine a Diesel: ${car.marca} ${car.modello}`);
   
});

carOthers.forEach(car => {

   console.log(`Le altre macchine: ${car.marca} ${car.modello}`);
   
});

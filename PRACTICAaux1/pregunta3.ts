
 //PREGUNTA Nª3
 
 var emoji: string  ='☑️';

 let entrada1: string = 'underscore_case';
 let entrada2: string = 'first_name';
 let entrada3: string = 'Some_Variable';
 let entrada4: string = 'calculate_AGE';
 let entrada5: string = 'delayed_departure';

 function convertir(salida:string):string {
     return salida
    .split('_').reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1)+ emoji);
     
}

console.log("Las salidas son:");
console.log(".................");

  console.log(convertir(entrada1)); 
  console.log(convertir(entrada2));
  console.log(convertir(entrada3));
  console.log(convertir(entrada4));
  console.log(convertir(entrada5));
//PREGUNTA Nª3
var emoji = '☑️';
var entrada1 = 'underscore_case';
var entrada2 = 'first_name';
var entrada3 = 'Some_Variable';
var entrada4 = 'calculate_AGE';
var entrada5 = 'delayed_departure';
function convertir(salida) {
    return salida
        .split('_').reduce(function (a, b) { return a + b.charAt(0).toUpperCase() + b.slice(1) + emoji; });
}
console.log("Las salidas son:");
console.log(".................");
console.log(convertir(entrada1));
console.log(convertir(entrada2));
console.log(convertir(entrada3));
console.log(convertir(entrada4));
console.log(convertir(entrada5));

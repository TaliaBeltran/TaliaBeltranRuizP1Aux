//PREGUNTA Nª2
//Tarea_1
var fact = 275;
var tip = (fact >= 50 || fact <= 300) ? fact * 0.15 : fact * 0.20;
console.log(tip);
//Tarea_2
console.log("La factura fue" + " " + fact +
    ", la propina fue" + " " + tip +
    " y el valor total fue" + " " + (fact + tip));
//Tarea_3
var calcTip = function (v1) {
    var v2 = (v1 >= 50 || v1 <= 300) ? v1 * 0.15 : v1 * 0.20;
    return v2;
};
console.log(calcTip(100));
//Tarea_4
var facturas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//Tarea_5
var propinas = [];
var totales = [];
//Tarea_6
for (var i = 0; i < facturas.length; i++) {
    propinas.push(calcTip(facturas[i]));
    totales.push(calcTip(facturas[i]) + facturas[i]);
}
var v2 = 1;
for (var j = 0; j < facturas.length; j++) {
    console.log("La factura " + v2 + " fue de " + facturas[j] +
        " con uuna propina de " + propinas[j] +
        " y el valor total es de " + totales[j]);
    v2++;
}

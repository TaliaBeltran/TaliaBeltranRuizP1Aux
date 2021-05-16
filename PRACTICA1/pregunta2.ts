//PREGUNTA Nª2

//Tarea_1
var fact:number = 275;
var tip = (fact >= 50 || fact <= 300)? fact * 0.15: fact * 0.20;
console.log(tip)
//Tarea_2
console.log("La factura fue"+ " "+ fact+
           ", la propina fue"+ " "+ tip+ 
           " y el valor total fue"+ " "+ (fact+tip));
//Tarea_3
var calcTip = function (v1:number){
    let v2:number = (v1 >= 50 || v1 <= 300)? v1 * 0.15: v1 * 0.20
    return v2;
}
console.log(calcTip(100));
//Tarea_4
var facturas: Array <number> = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//Tarea_5
var propinas: Array <number> = [];
var totales: Array <number> = []; 
//Tarea_6
for(let i:number = 0; i<facturas.length; i++){
    propinas.push(calcTip(facturas[i]));
    totales.push(calcTip(facturas[i]) + facturas[i]);
}
var v2: number = 1;
for(let j:number = 0; j<facturas.length; j++){
    console.log("La factura "+ v2+ " fue de "+ facturas[j]+ 
                " con uuna propina de "+ propinas[j]+ 
                " y el valor total es de "+ totales[j]);
    v2++;
}
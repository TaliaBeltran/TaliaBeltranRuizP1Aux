//PREGUNTA Nª1

//Tarea_1
var equipo_1:string = 'Bayern de Munuch';
var equipo_2:string = 'Borrussia Dortmund';

const jugadores1 = ['Neuer','Pavard','Martinez','Alaba','Davies',
                                'Kimmich','Goretzka','Coman','Muller',
                                'Gnarby','Lewandowski'] ;

const jugadores2 = ['Burki','Schulz','Hummels','Akanji',
                                  'Hakimi','Weigl','Witsel','Hazard',
                                  'Brandt','Sancho','Gotze',]
//Tarea_2
var gk: string = jugadores1[0];
var fieldPlayers: Array <string> = jugadores1.slice(1);
console.log(gk)
console.log(fieldPlayers)
//Tarea_3
var allPlayers: Array <string> = jugadores1.concat(jugadores2);
console.log(allPlayers)
//Tarea_4
var players1Final: Array <string> = jugadores1
players1Final.push('Thiago', 'Coutinho', 'Perisic');
console.log(players1Final)
//Tarea_5
var equipo1: number = 1.33;
var empate: number = 3.25;
var equipo2: number = 6.5;


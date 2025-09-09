// Snack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const team = [
    {
        'nome' : "Roma",
        'puntiFatti' : 0,
        'falliSubiti' : 0,

    },
    {
        'nome' : "Juventus",
        'puntiFatti' : 0,
        'falliSubiti' : 0,

    },
    {
        'nome' : "Massese",
        'puntiFatti' : 0,
        'falliSubiti' : 0,

    },
    {
        'nome' : "Lazio",
        'puntiFatti' : 0,
        'falliSubiti' : 0,

    },
    {
        'nome' : "Fiorentina",
        'puntiFatti' : 0,
        'falliSubiti' : 0,

    },
];

function casualNum (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let value = []

for ( let i = 0; i < team.length; i++){

    team[i].puntiFatti = casualNum (0, 100);
    team[i].falliSubiti = casualNum (0, 500);

    value.push(team[i].nome, team[i].falliSubiti);

}
console.log(team);
console.log(value);

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Dichiarazione costanti
const heavyBike = document.getElementById("heavy-bikes");
const bikes = [
    {
        'nome' : "scott",
        'peso' : 13,
    },
    {
        'nome' : "bianchi",
        'peso' : 15,
    },
    {
        'nome' : "trek",
        'peso' : 12,
    },
    {
        'nome' : "specialized",
        'peso' : 21,
    },
    {
        'nome' : "cannondale",
        'peso' : 22,
    }

];

let lighterBike = bikes [0];

 for (const i in bikes) {
    if (bikes[i].peso < lighterBike.peso) {
        lighterBike = bikes[i];
    }
 }

console.log(`La bici più leggera è: ${lighterBike.nome} e pesa ${lighterBike.peso}`);
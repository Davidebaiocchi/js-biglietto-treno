// Km percorsi
var kmDaPercorrere = prompt ('Km che dovrai percorrere?');
console.log(kmDaPercorrere);

// Età Cliente
var eta = prompt ('Quanti anni hai?');
console.log(eta);

// Costo tragitto
var costoTragitto = kmDaPercorrere * 0.21;

var sconto = 0;
console.log(costoTragitto);

if (eta < 18) {
    sconto = costoTragitto * 0.2;
    costoTragitto -= sconto;
} else if (eta > 65) {
    sconto = costoTragitto * 0.4;
    costoTragitto -= sconto;
} else {
    costoTragitto -= sconto;
}
console.log(costoTragitto);

// Uscita prezzo html
document.getElementById('prezzo-tragitto').innerHTML = costoTragitto.toFixed(2) + ' Euro'; 
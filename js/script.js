// dati


// logica 

// punto 1
const prezzo = parseInt(chilometri * 0.21).toFixed(2) ;
console.log(prezzo, typeof prezzo) ;

// punto 2 
const over65 = (prezzo * 0.6).toFixed(2);
const fasciaInterm = prezzo
const minorenne = (prezzo * 0.8).toFixed(2);

let sconto = ""

if (anni > 65) {
     sconto = over65
} else if (anni > 18 && anni < 65) {
    sconto = fasciaInterm
} else {
    sconto = minorenne
}

console.log(sconto)

// scritture del messaggio
const messaggio = `
<h4>Ciao! questo è il prezzo del tuo biglietto già scontato! <span>€ ${sconto}</span></h4>
`

// Otput
document.getElementById("result").innerHTML = messaggio
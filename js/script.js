// dati

const buttons = document.getElementById("conferma");
buttons.addEventListener("click", function() {
    console.log("Bene!");
    
    const distanceElem = document.getElementById("distance");
    console.log(distanceElem);
    const distance = distanceElem.value;
    
    const ageElem = document.getElementById("age");
    console.log(ageElem);
    const age = ageElem.value;
    
    // svolgimento
    // prezzo base del biglietto 
    const prezzoBase = parseInt(distance * 0.21) ;
    console.log(prezzoBase, typeof prezzoBase) ;


    // costanti prezzo biglietto per età
    const over65 = prezzoBase * 0.6;
    const fasciaInterm = prezzoBase
    const minorenne = prezzoBase * 0.8;

    // calcolo prezzo biglietto per età
    let prezzoFinale = ""

     if (age > 65) {
          prezzoFinale = over65
    } else if (age > 18 && age < 65) {
         prezzoFinale = fasciaInterm
    } else {
          prezzoFinale = minorenne
    }  
    console.log(prezzoFinale)
     
})

// preparazione messaggio 
const greeting = `Ciao!`
const message = `Il prezzo finale del tuo biglietto è € ${prezzoFinale}`
console.log(greeting, message);
// Otput
//document.getElementById("result").innerHTML = result
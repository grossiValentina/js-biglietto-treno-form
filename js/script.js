// variabili da riutilizzare
const distanceElem = document.getElementById("distance");
const ageElem = document.getElementById("age");

// dati
// bottone Conferma
const buttons = document.getElementById("conferma");
buttons.addEventListener("click", function() {
    console.log("Bene!");
    
    //input
    console.log(distanceElem);
    const distance = distanceElem.value;
    
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
    let prezzoFinale = 0;

     if (age > 65) {
          prezzoFinale = over65
    } else if (age > 18 && age < 65) {
         prezzoFinale = fasciaInterm;
    } else {
          prezzoFinale = minorenne;
    }  
    console.log(prezzoFinale);
     

    // preparazione messaggio 
    const userGreeting = `Ciao!`
    const userMessage = `Il prezzo finale del tuo biglietto è € ${prezzoFinale.toFixed(2)}`
    console.log(userGreeting, userMessage);


     // Otput
     document.getElementById("greeting").innerHTML = userGreeting;
     document.getElementById("message").innerHTML = userMessage;


});
 
// bottone Ripeti
document.getElementById("Ripeti").addEventListener("click", function () {
console.log("Ripeti!");
distanceElem.innerHTML = "";
ageElem.innerHTML = "";
userMessage.innerHTML = "";


     
})
####ESERCIZIO: calcolo del prezzo del biglietto del treno
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
**MILESTONE 2:**
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

####Svolgimento:
Struttura HTML

JS:
Tutto deve partire al click del tasto CONFERMA
Il codice sarà all'interno dell' _EventListener_ :

#####Dati:
1. Prelevare dall'input quanti chilometri vuole percorrere il passeggero
2. Prelevare dall'input l'età del passeggero 

#####Logica:
1. Calcolo il prezzo del biglietto moltiplicando il numero di chilometri da percorrere per 0.21

2.
IF l'età dell'utente è > 65 anni, cioè **over 65**
      elaboro messaggio "E' stato applicato il 40% di sconto" 

ELSE IF l'età dell'utente è > 18 anni e < 65 anni, cioè **fascia intermedia**
       elaboro messaggio "Nessuno sconto applicato"

ELSE l'età dell'utente è < 18 anni, cioè **minorenne**
      elaboro messaggio "E' stato applicato il 20% di sconto"
     

#####Ouput:

Stampo il messaggio in pagina 

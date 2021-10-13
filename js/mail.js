//creo l'array contenente le mail delle persone che possono entrare
const listMail = ["mario.mario@bros.it", "luigi.mario@bros.it", "wario.mario@bros.it", "waluigi.mario@bros.it"];

//chiedo all'utente la mail
const mailRichiesta = prompt("Inserisci l'e-mail");

//assegno una variabile per segnare la possibilità o meno di accesso 
let utenteAccesso = false;

//con un ciclo for controllo l'array e paragono la mail data dall'utente a quelle dentro l'array
for (let i = 0; i < listMail.length; i++){
    //associo l'email corrente a una variabile
    const currentEMail = listMail[i];


    
    //se la condizione è vera assegno alla variabile utenteAccesso il valore true 
    if (currentEMail.toLowerCase() === mailRichiesta.toLowerCase()){
        utenteAccesso = true;
    }
        
}

console.log(utenteAccesso);

//a seconda del valore con il quale la variabile esce dal ciclo mostro un alert diverso
if (utenteAccesso === true){
    alert ("la tua e-mail è nella lista, puoi entrare");
}else {
    alert("la tua e-mail non è nella lista, non puoi entrare");
}
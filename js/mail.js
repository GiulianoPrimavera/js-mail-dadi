//creo l'array contenente le mail delle persone che possono entrare
const listMail = ["mario.mario@bros.it", "luigi.mario@bros.it", "wario.mario@bros.it", "waluigi.mario@bros.it"];

//chiedo all'utente la mail
const mailRichiesta = prompt("Inserisci l'e-mail");

//con un ciclo for controllo l'array e paragono la mail data dall'utente a quelle dentro l'array
for (let i = 0; i < listMail.length; i++){
    //associo l'email corrente a una variabile
    const currentEMail = listMail[i];

    //se corrisponde lo faccio entrare altrimenti resta fuori
    if (mailRichiesta.toLocaleLowerCase() === currentEMail.toLocaleLowerCase()){
        alert("puoi entrare");
    }else{
        alert("la tua e-mail non è presente nella lista, non puoi entrare");
    }

}
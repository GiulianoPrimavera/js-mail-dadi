
//faccio un numero random per il computer
const computerRandom = Math.floor(Math.random() * 6 )+ 1;

//faccio un numero random per l'utente
const utenteRandom = Math.floor(Math.random() * 6 )+ 1;

//mostro in console i risultati
console.log(
    `il computer ha segnato ${computerRandom}, l'utente ha segnato ${utenteRandom}`
);

//confronto i risultati e mostro un messaggio per ogni casos
if (computerRandom > utenteRandom){
    console.log("il computer vince");
}else if (computerRandom < utenteRandom){
    console.log("l'utente vince");
}else{
    console.log("pareggio");
}
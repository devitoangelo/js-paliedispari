//L’utente sceglie pari o dispari
let SceltaUtente;
do {
    SceltaUtente = prompt("Scegli pari o dispari");
    if (SceltaUtente != "pari" && SceltaUtente != "dispari") {
        alert("La tua scelta è sbagliata,scegli pari o dispari!");
    }
} while (
    SceltaUtente != "pari" && SceltaUtente != "dispari"
);




//L'utenete inserisce un numero da 1 a 5.
const numberUtente = Number(prompt("Inserisci un numero da 1 a 5"))


//Generiamo un numero random (sempre da 1 a 5) per il computer
// const numberPc = Number(Math.floor(Math.random() * 5 + 1));


//Sommiamo i due numeri
// let somma = numberUtente + numberPc

// let dispari = somma % 2
// let pari = somma % 3

//Stabiliamo se la somma dei due numeri è pari o dispari 
// if (dispari) {
//     alert("la somma è dispari")
// } else if (pari) {
//     alert("la somma è pari")

// }



//Dichiara se l'utente ha vinto o meno
// if (SceltaUtente != "pari" && SceltaUtente != "dispari") {
//     alert("hai perso")
// } else if (SceltaUtente == pari && SceltaUtente == dispari) {
//     alert("hai vinto")

// }





function numberRandom() {
    const numberPc = Number(Math.floor(Math.random() * 5 + 1));
    return numberPc;


}

function partita() {
    let somma = numberUtente + numberPc;
    let dispari = somma % 2;


    if (dispari) {
        alert("la somma è dispari");
    } else {
        alert("la somma è pari");

    }

    return dispari;

}



const numberPc = numberRandom();
const ritorno = partita();

if (SceltaUtente != "pari" && ritorno) {
    alert("hai vitno")
} else if (SceltaUtente == "pari" && ritorno == 0) {
    alert("hai vinto")

} else {
    alert("hai perso")
}

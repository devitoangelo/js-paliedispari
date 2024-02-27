const parola = prompt("inserisci una parola")

function palindroma() {
    let arrayParola = [];
    for (let i = 0; i < parola.length; i++) {
        arrayParola[i] = parola[i]

    }

    const inverso = arrayParola.reverse();
    let  ritorno = "";

    for (let i = 0; i < arrayParola.length; i++) {
        if (arrayParola[i] != inverso[i]) {

            ritorno = "non è palindroma";
            return ritorno;
        }
    }

    ritorno = "è palindroma";
    return ritorno;

}


const palindroma1 = palindroma();
alert(palindroma1);










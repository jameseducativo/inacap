function consultarPalindromo() {
    palabra = prompt("¿Qué palabra desea consultar si es un palíndromo?");
    console.log("Palabra ingresada: " + palabra);
    let palabraInver = new Array();
    for (i in palabra.split("")) {
        palabraInver += palabra.split("")[palabra.length - i - 1];
    }
    console.log("Palabra invertida: " + palabraInver)
    if (palabra == palabraInver) {
        alert(palabra.toString() + " es un palíndromo.");
    } else {
        alert(palabra.toString() + " no es un palíndromo.")
    }
    return palabraInver;
}

// Calcular e imprimir la tabla de multiplicar de un número cualquiera.
function tablasMultiplicar() {
    for(i = 0; i < 13; i++) {
        console.log("3 x "+ i + " = " + 3 * i);
    }
}

// Evaluar un número primo
function numerosPrimos() {
    let num = 7;
    primo = false;
    for(i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = true;
        }
    }
    if (primo == true) {
        console.log(num + " es número primo.")
    } else {
        console.log(num + " no es número primo.")
    }
}

// Listado de números primos hasta el 100
function listadoPrimos() {
    primos = Array()
    for (i = 2; i <= 100; i++) {
        let primo = true;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                primo = false;
            }
        }
        if (primo == true) {
            primos.push(i)
        }
    }
    console.log("Listado de números primos: " + primos);
}
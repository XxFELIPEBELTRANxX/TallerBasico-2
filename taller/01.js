
function promedio() {
    let notas = [];
    let regla = '';
    let suma = 0;
    let promedio = 0;

    do {
        let nota1 = parseFloat(prompt("Ingrese la nota"));
        if (nota1 <= 5) {
            notas.push(nota1);
        }
        regla = prompt("¿Desea ingresar otra nota? S/N");
    } while (regla.toLowerCase() === 's');

    for (const nota of notas) {
        suma += nota;
    }
    promedio = suma / notas.length;

    if (promedio > 4.8 && promedio <= 5) {
        console.log("E");
    } else if (promedio > 4.5 && promedio <= 4.8) {
        console.log("MB");
    } else if (promedio > 4.0 && promedio <= 4.4) {
        console.log("B");
    } else if (promedio > 3.5 && promedio <= 4.0) {
        console.log("A");
    } else if (promedio > 0 && promedio < 3.5) {
        console.log("R");
    }
}

promedio();
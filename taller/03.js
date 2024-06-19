const corrales = [
    ['oveja', 'oveja', '', 'oveja', ''],
    ['oveja', 'oveja', 'oveja', 'oveja', ''],
    ['oveja', 'muerta', 'lobo', '', 'muerta']
];

function contarOvejasVivas(corrales) {
    let contador = 0;
    for (const corral of corrales) {
        for (const animal of corral) {
            if (animal === 'oveja') {
                contador++;
            }
        }
    }
    return contador;
}

function contarEspaciosLibres(corrales) {
    let contador = 0;
    for (const corral of corrales) {
        for (let i = 0; i < corral.length; i++) {
            if (corral[i] === '' || corral[i] === 'muerta') {
                contador++;
                corral[i] = ''; // Limpiar las ovejas muertas
            }
        }
    }
    return contador;
}

function neutralizarLobo(corrales) {
    let contadorEspaciosLibres = 0;
    for (const corral of corrales) {
        for (let i = 0; i < corral.length; i++) {
            if (corral[i] === 'lobo') {
                contadorEspaciosLibres++;
                corral[i] = ''; // Eliminar el lobo
            }
        }
    }
    return contadorEspaciosLibres;
}

function incorporarNuevasOvejas(corrales, espaciosLibres) {
    let ovejasAAgregar = espaciosLibres * 2;
    for (const corral of corrales) {
        for (let i = 0; i < corral.length; i++) {
            if (corral[i] === '' && ovejasAAgregar > 0) {
                corral[i] = 'oveja';
                ovejasAAgregar--;
            }
        }
    }
}

function administrarCorrales(corrales) {
    const ovejasVivas = contarOvejasVivas(corrales);
    const espaciosLibres = contarEspaciosLibres(corrales);
    const espaciosLibresPorLobos = neutralizarLobo(corrales);
    incorporarNuevasOvejas(corrales, espaciosLibres + espaciosLibresPorLobos);
    return {
        ovejasVivas,
        espaciosLibres,
        corrales
    };
}

const resultado = administrarCorrales(corrales);
console.log('Número de ovejas vivas:', resultado.ovejasVivas);
console.log('Número de espacios libres:', resultado.espaciosLibres);
console.log('Estado final de los corrales:', resultado.corrales);
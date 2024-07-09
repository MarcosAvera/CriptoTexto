function criptografarTexto() {
    const input = document.getElementById('principalInput').value;
    if (input) {
        const resultado = criptografar(input);
        atualizarResultado(resultado);
    } else {
        alert("Por favor, digite algum texto.");
    }
}

function descriptografarTexto() {
    const input = document.getElementById('principalInput').value;
    if (input) {
        const resultado = descriptografar(input);
        atualizarResultado(resultado);
    } else {
        alert("Por favor, digite algum texto.");
    }
}

function atualizarResultado(texto) {
    const resultadoDiv = document.querySelector('.principalTextoCripto');
    resultadoDiv.innerHTML = `
        <h2 class="tituloTexto">Resultado</h2>
        <p class="paragrafoTexto">${texto}</p>
    `;
}

function criptografar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function descriptografar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

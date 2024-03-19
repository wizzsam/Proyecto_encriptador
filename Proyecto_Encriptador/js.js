var texto_encriptar;
const imagen_Resul = document.querySelector("#muñeco_img");
const texto_info = document.querySelector("#texto_info_mensaje")
const texto_convertor = document.querySelector("#textareaConvertor")
const boton_copi = document.querySelector("#boton_copiar")
const titulo_resultado = document.querySelector("#titulo_resultado")
const resultado = document.querySelector("#resultado")
const refrescar = document.querySelector("#refrescar");

function texto_capturado() {
    texto_encriptar = document.querySelector('.ingreso_dato').value;
}

function boton_refrescar() {

    refrescar.addEventListener("click", (_) => {

        location.replace(location.href);
    });
}

function boton_Copiar() {
    if (resultado.textContent !== "") {
        navigator.clipboard.writeText(resultado.textContent)
            .then(() => { alert("Texto copiado en el portapapeles") })
            .catch(err => { alert("Error al copiar el texto") });
    } else {
        alert("No se encontro texto");
    }
}

function Boton_Encriptar() {

    texto_capturado();
    encriptacion(texto_encriptar);
}

function Boton_Desencriptar() {
    texto_capturado();
    Desencriptacion(texto_encriptar);
}

function letras_minusculas(textarea) {
    textarea.value = textarea.value.toLowerCase();
    textarea.value = textarea.value.replace(/[^\w\s]/gi, '');
    textarea.value = textarea.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function encriptacion(texto) {
    var textoEncriptado = '';
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
            textoEncriptado += 'ai';
        } else if (texto[i] === 'e') {
            textoEncriptado += 'enter';
        } else if (texto[i] === 'i') {
            textoEncriptado += 'imes';
        } else if (texto[i] === 'o') {
            textoEncriptado += 'ober';
        } else if (texto[i] === 'u') {
            textoEncriptado += 'ufat'
        } else {
            textoEncriptado += texto[i];

            imagen_Resul.style.display = "none";
            texto_info.style.display = "none";
            texto_convertor.style.display = "none";
            resultado.style.display = "";
            boton_copi.style.display = "";
            resultado.textContent = textoEncriptado
            titulo_resultado.style.display = "";
            refrescar.style.display = "";

        }
    }

}

function Desencriptacion(texto_encriptado) {
    var textoDesencriptado = '';
    for (var i = 0; i < texto_encriptado.length; i++) {
        if (texto_encriptado[i] === 'a' && texto_encriptado[i + 1] === 'i') {
            textoDesencriptado += 'a';
            i += 1;
        } else if (texto_encriptado[i] === 'e' && texto_encriptado[i + 1] === 'n' && texto_encriptado[i + 2] === 't' && texto_encriptado[i + 3] === 'e' && texto_encriptado[i + 4] === 'r') {
            textoDesencriptado += 'e';
            i += 4;
        } else if (texto_encriptado[i] === 'i' && texto_encriptado[i + 1] === 'm' && texto_encriptado[i + 2] === 'e' && texto_encriptado[i + 3] === 's') {
            textoDesencriptado += 'i';
            i += 3;
        } else if (texto_encriptado[i] === 'o' && texto_encriptado[i + 1] === 'b' && texto_encriptado[i + 2] === 'e' && texto_encriptado[i + 3] === 'r') {
            textoDesencriptado += 'o';
            i += 3;
        } else if (texto_encriptado[i] === 'u' && texto_encriptado[i + 1] === 'f' && texto_encriptado[i + 2] === 'a' && texto_encriptado[i + 3] === 't') {
            textoDesencriptado += 'u';
            i += 3;
        } else {
            textoDesencriptado += texto_encriptado[i];
        }
        imagen_Resul.style.display = "none";
        texto_info.style.display = "none";
        texto_convertor.style.display = "none";
        resultado.style.display = "";
        boton_copi.style.display = "";
        resultado.textContent = textoDesencriptado
        titulo_resultado.style.display = "";

    }

}
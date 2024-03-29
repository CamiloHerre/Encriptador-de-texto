function encriptar (){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let figura = document.getElementById("figura");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat")
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        figura.src = "./img/encriptado.png";
    } else {
        figura.src = "./img/buscando.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Heyy!!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar (){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let figura = document.getElementById("figura");

    let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u")

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        figura.src = "./img/desencriptado.png";
    } else {
        figura.src = "./img/buscando.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Heyy!!", "Debes ingresar un texto", "warning");
        }                    

}

function copiar (){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    
    if (texto.length != 0){
        var contenido = document.querySelector("#texto");
        contenido.select();
        document.execCommand("copy");
        figura.src ="./img/copiar.png";
        tituloMensaje.textContent = "Texto copiado con éxito";
    } else {
        figura.src = "./img/buscando.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Heyy!!", "Debes ingresar un texto", "warning");
        }  
}

function borrar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    if (texto.length != 0){
        document.getElementById("texto").value = "";
        figura.src ="./img/borrar.png";
        tituloMensaje.textContent = "Texto borrado con éxito";
    } else {
        figura.src = "./img/buscando.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Heyy!!", "Debes ingresar un texto", "warning");
        }  
}
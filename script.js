//variables
let encripto = false;
const mensajeInput = document.getElementById('texto');
const letras = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
];

//Limpia el cuadro de texto cada vez que se hace click en un botón
function limpiartexto(){

    document.getElementById('texto').value = '';
}

function copiado(){

    let texto = document.getElementById('mostrarResultado').innerText;
    navigator.clipboard.writeText(texto)
    .then(() => {
            alert("Texto copiado exitosamente");  
    })   
 
    if (encripto){ // verifica si el cuadro de texto está vacío.
        limpiartexto();
    }

    //Cambios de estilos css
    document.getElementById('texto').style.display = "block";
    document.getElementById('muneco').style.display = "block";
    document.getElementById('mostrarResultado').style.display = "none";
    document.getElementById('btn-copiar').style.display = "none";
    document.getElementById('btn-encriptar').style.display = "block";
    document.getElementById('btn-desencriptar').style.display = "block";
    document.getElementById('aclaracion').style.display = "block";
    
}

function encriptador(){

    let msjEncriptado = document.getElementById('mostrarResultado');
    let mensaje = mensajeInput.value; 
    let textoEncriptado = ''; 
    encripto = false;

    if( mensaje == ""){ // verifica si el cuadro de texto está vacío.
        mensaje = msjEncriptado.innerText;
        console.log('No hay nada escrito');
    }

    for (let i = 0; i < mensaje.length; i++) { // Recorre todo el input y el valor se guarda en la variable "char".
        const char = mensaje[i]; 
        let vocales;
        for (let j = 0; j < letras.length; j++) { // Recorre y compara la variable "letras" con la variable "char" (del bucle FOR anterior) para poder realizar la encriptación y se guarda en la variable "vocales".
            if (letras[j][0] === char) {
            vocales = letras[j];
            encripto = true; 
            break;
            }
        }
        if (vocales) { //reemplaza las vocales por su equivalente Ej: (a -->"ai");
        textoEncriptado += vocales[1];
        } else {
        textoEncriptado += char; 
        }
    }
    if (encripto){ // verifica si el cuadro de texto está vacío.
        limpiartexto();
    }
    msjEncriptado.innerText = textoEncriptado; 

    // cambios de estilos css
    document.getElementById('mostrarResultado').style.display = "block";
    document.getElementById('texto').style.display = "none";
    document.getElementById('muneco').style.display = "none";
    document.getElementById('aclaracion').style.display = "none";
    document.getElementById('btn-copiar').style.display = "block";
    document.getElementById('btn-encriptar').style.display = "none";
    document.getElementById('btn-desencriptar').style.display = "block";

}

function desencriptador() {
    
    let msjFinal = document.getElementById('mostrarResultado');
    let mensajeActual = mensajeInput.value;
    let vueltas = 0;
    let textoDesencriptado = "";
    encripto = false;
    
    if( mensajeActual == ""){ // verifica si el cuadro de texto está vacío.
        mensajeActual = msjFinal.innerText;
        console.log('No hay nada escrito');
    }

    while(vueltas != mensajeActual.length){
    
        if(mensajeActual[vueltas] == "a" && mensajeActual[vueltas + 1] == "i"){
            textoDesencriptado += "a";
            vueltas++;
            encripto = true;
        } else if(mensajeActual[vueltas] == "e" && mensajeActual[vueltas + 1] == "n"){ 
            textoDesencriptado += "e";
            vueltas += 4;
            encripto = true;
        } else if(mensajeActual[vueltas] == "i" && mensajeActual[vueltas + 1] == "m"){ 
            textoDesencriptado += "i";
            vueltas += 3;
            encripto = true;
        } else if(mensajeActual[vueltas] == "o" && mensajeActual[vueltas + 1] == "b"){ 
            textoDesencriptado += "o";
            vueltas += 3;
            encripto = true;
        } else if(mensajeActual[vueltas] == "u" && mensajeActual[vueltas + 1] == "f"){ 
            textoDesencriptado += "u";
            vueltas += 3;
            encripto = true;
        } 
        else{
            textoDesencriptado += mensajeActual[vueltas];
        }
        vueltas++;
    }

    if (encripto){

        limpiartexto();
    }
    //cambios de estilos css
    document.getElementById('mostrarResultado').style.display = "block";
    document.getElementById('texto').style.display = "none";
    document.getElementById('muneco').style.display = "none";
    document.getElementById('aclaracion').style.display = "none";
    document.getElementById('btn-copiar').style.display = "block";
    document.getElementById('btn-desencriptar').style.display = "none";
    document.getElementById('btn-encriptar').style.display = "block";

    return msjFinal.innerText = textoDesencriptado;
}
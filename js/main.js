
ocultarBtnCopy()
let btnEncriptar = document.querySelector("#btn-encriptar")
btnEncriptar.addEventListener("click",function(event){
    
    //Capturo el input
    var input= document.querySelector("#input-frase")
    var frase=input.value
    //Capturo el textarea,le asigno la frase encriptada y reseteo el input
    if(validarFrase(frase)){  
        mostrarBtnCopy()   
        eliminarElementos()
        let area= document.querySelector("#area")
        area.textContent=encriptarFrase(frase)
        insertarEstilos()
        input.value=""
    }
    //Reseteo el input
    else
        input.value=""
})

let btnDesencriptar = document.querySelector("#btn-desencriptar")
btnDesencriptar.addEventListener("click",function(event){
    //Capturo el input y capturo el string que contiene
    var input= document.querySelector("#input-frase")
    var frase=input.value
    //Capturo el area, le asigno el texto desencriptado y reseteo el input
    let area=document.querySelector("#area")
    area.textContent=desencriptarFrase(frase)
    input.value=""
})

let btnCopiar = document.querySelector("#btn-copy")
btnCopiar.addEventListener("click", function(event){
    var texto= document.querySelector("#area")
    texto.select();
    document.execCommand('copy')  
})

//Funcion que oculta el boton de copiar al ingresar a la pagina
function ocultarBtnCopy(){
    let btnCp=document.querySelector("#btn-copy")
    btnCp.style.visibility="hidden"
}

//Funcion que muestra el boton de copiar al encriptar una frase
function mostrarBtnCopy(){
    let btnCp=document.querySelector("#btn-copy")
    btnCp.style.visibility="visible"
}

//Funcion que encripta una frase. Recibe como parametro un string
function encriptarFrase(fraseIngresada){
    return fraseIngresada.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")
}

//Funcion que elimina la imagen y el mensaje del textarea
function eliminarElementos(){
    var element = document.querySelector('.mensaje-alerta')
    var element2 = document.querySelector('.personita')

    if(element!=null)
        element.parentNode.removeChild(element)   
    if(element2!=null)
        element2.parentNode.removeChild(element2)
}

//Funcion que inserta nuevos estilos al ocultar la imagen
function insertarEstilos(){
    let seccionDesencriptado=document.querySelector(".textos")
    seccionDesencriptado.classList.add("seccion-desencriptado")

    let areaDesencriptado=document.querySelector(".area-desencriptado")
    areaDesencriptado.classList.add("area-desencriptado2")
}

//Esta funcion verifica que la frase ingresada admita solo letras minusculas, retorna un boolean. Recibe como parametro una frase
function validarFrase(palabra){
    const letrasValidas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w","x","y","z"," "];
    let esValido=true
    if(palabra.length===0)
        esValido=false
    if(palabra.length===1 && palabra[0]===" ")
        esValido=false
    else{
        for (let i = 0; i < palabra.length; i++) {
            if(letrasValidas.indexOf(palabra[i])===-1)     
                esValido= false
        }
    }
    return esValido
}

//Esta funcion verifica si una letra es vocal o no, retorna un boolean. Recibe por parametro una letra
function esVocal(letra){
    return letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u"
}

//Esta funcion desencripta una frase, retorna un string. Recibe por parametro un string
function desencriptarFrase(unaFrase){
    return unaFrase.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u")
}
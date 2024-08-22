
const textarea = document.getElementById("textarea");

const botonencriptar = document.getElementById("botonencriptar");

const botondes = document.getElementById("botondes");

const botoncopiar = document.getElementById("botoncopiar");

const mensajefinal = document.getElementById("mensajefinal");

const infoderecha = document.getElementById("infoderecha");

const mune = document.getElementById("mune");

const partederecha = document.getElementById("partederecha");

const parteizq = document.getElementById("parteizq");

textarea.focus();

let reemplazar = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajefinal.innerHTML = nuevoValor;

    mune.classList.add("oculto");
    textarea.value="";
    infoderecha.style.display = "none";
    botoncopiar.style.display = "block";
    partederecha.classList.add("ajust");
    mensajefinal.classList.add("ajust");

}

botonencriptar.addEventListener("click", () => {

    const text = textarea.value.toLowerCase()

        function encriptar(newText){
            for (let i=0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText;
        };
    
    

    //const textEncriptado = encriptar(text);

    remplace(encriptar(text));

    //mensajefinal.innerHTML = textEncriptado;

   /* mune.style.display = "none";
    infoderecha.style.display = "none";
    botoncopiar.style.display = "block";
    partederecha.classList.add("ajust");
    mensajefinal.classList.add("ajust");*/
    //console.log(textEncriptado);
});

botondes.addEventListener("click", () =>{
    const text = textarea.value.toLowerCase();
    function desencriptar(newText){
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0])
            };
        };
        return newText;
    };

    remplace(desencriptar(text));
    //const textDes = desencriptar(text);

    //mensajefinal.innerHTML = textDes;
});

botoncopiar.addEventListener("click",() =>{
    let texto = mensajefinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');
    alert("El texto se ha copiado al portapapeles");

    mensajefinal.innerHTML="";

    mune.classList.remove("oculto");

    infoderecha.style.display = "block";

    botoncopiar.style.display = "none";
    partederecha.classList.remove("ajust");
    mensajefinal.classList.remove("ajust");
    textarea.focus();

})
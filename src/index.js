//Declarar variable para llamar al id mensaje a cifrar 
const wordsToEncode = document.getElementById("message1");
console.log(wordsToEncode);

//Declarar variable para llamar al textarea de salida
const finalMessage = document.getElementById("encryptedMessage");

//Declarar evento listener del botón encode
const encode = document.getElementById("encode");
encode.addEventListener("click", () => {
    const displacementNumber = document.getElementById("offset").value;
    const firstText = document.getElementById("message1").value;

    finalMessage.value = cipher.encode(displacementNumber, firstText);
    console.log(encode);
});

//Declarar variable para llamar al id mensaje a descifrar
const wordsToDecode = document.getElementById("message1");
console.log(wordsToDecode);

//Declarar variable para llamar al textarea de salida
const finalMessage = document.getElementById("encryptedMessage");

//Declarar evento listener del botón decode
const decode = document.getElementById("decode");
decode.addEventListener("click", () => {
    const displacementNumber = document.getElementById("offset").value;
    const firstText = document.getElementById("message1").value;
    finalMessage.value = cipher.decode(displacementNumber, firstText);
});

//Declarar Función botón borrar
const eraseBtn = document.getElementById("eraseButton");
eraseBtn.addEventListener("click", () => {
    document.getElementById("offset").value = "";
    document.getElementById("message1").value = "";
    document.getElementById("encryptedMessage").innerHTML = "";
});

import cipher from './cipher.js';
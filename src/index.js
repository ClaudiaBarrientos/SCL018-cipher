import cipher from './cipher.js';

const wordsToEncode = () => {
    let displacementNumber = document.getElementById("offset").value;
    let firstText = document.getElementById("message1").value;
    document.getElementById("encryptedMessage").value = cipher.encode(displacementNumber, firstText);
}
const encode = document.getElementById("encode");
encode.addEventListener("click", wordsToEncode);

const wordsToDecode = () => {
    let displacementNumber = document.getElementById("offset").value;
    let firstText = document.getElementById("message1").value;
    document.getElementById("encryptedMessage").value = cipher.decode(displacementNumber, firstText);
}
const decode = document.getElementById("decode");
decode.addEventListener("click", wordsToDecode);

const clearForm = () => {
    document.getElementById("offset").value = "";
    document.getElementById("message1").value = "";
    document.getElementById("encryptedMessage").value = "";
}
const eraseBtn = document.getElementById("eraseButton");
eraseBtn.addEventListener("click", clearForm);
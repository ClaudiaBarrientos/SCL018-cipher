const cipher = {
    encode: (displacementNumber, firstText) => {
        if (displacementNumber === null || displacementNumber === 0) {
            throw new TypeError();
        }
        let encodedText = "";
        for (let i = 0; i < firstText.length; i++) {


            let asciiNumber = firstText.charCodeAt(i);

            if (asciiNumber >= 65 && asciiNumber <= 90) {
                let capitalLetters = (asciiNumber - 65 + parseInt(displacementNumber)) % 26 + 65;
                encodedText += String.fromCharCode(capitalLetters);
            } else if (asciiNumber >= 97 && asciiNumber <= 122) {
                let lowerLetters = (asciiNumber - 97 + parseInt(displacementNumber)) % 26 + 97;
                encodedText += String.fromCharCode(lowerLetters);
            }
        }
        return encodedText;
    },


    decode: (displacementNumber, firstText) => {
        if (displacementNumber === null || displacementNumber === 0) {
            throw new TypeError();
        }
        let decodedText = "";
        for (let i = 0; i < firstText.length; i++) {
            let asciiNumber = firstText.charCodeAt(i);

            if (asciiNumber >= 65 && asciiNumber <= 90) {
                let capitalLetters = (asciiNumber - 90 - parseInt(displacementNumber)) % 26 + 90;
                decodedText += String.fromCharCode(capitalLetters);

            } else if (asciiNumber >= 97 && asciiNumber <= 122) {
                let lowerLetters = (asciiNumber - 122 - parseInt(displacementNumber)) % 26 + 122;
                decodedText += String.fromCharCode(lowerLetters);
            }

        }
        return decodedText;

    }
};


export default cipher;
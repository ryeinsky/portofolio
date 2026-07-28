const typing = document.getElementById("typing");

let words = [];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

let typingTimeout = null;

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
            currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            typingTimeout =
                setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent =
            currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex =
                (wordIndex+1)%words.length;

        }

    }

    typingTimeout =
        setTimeout(typeEffect,deleting?50:100);

}

function setTypingWords(newWords){

    clearTimeout(typingTimeout);

    words = [...newWords];

    wordIndex = 0;
    charIndex = 0;
    deleting = false;

    typeEffect();

}
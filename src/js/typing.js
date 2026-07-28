const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "Informatics Student at UPN Veteran Jawa Timur",
        "QA & Software Testing Engineer",
        "Test Case Designer",
        "Manual Tester",
        "Bug Hunter",
        "Quality-Focused Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect(){

        const currentWord = words[wordIndex];

        if(!deleting){

            typing.textContent =
                currentWord.substring(0, charIndex++);

            if(charIndex > currentWord.length){

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        }else{

            typing.textContent =
                currentWord.substring(0, charIndex--);

            if(charIndex < 0){

                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}
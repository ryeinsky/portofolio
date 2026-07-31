const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

let progress = 0;

const interval = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";

    if(progress >= 100){

        clearInterval(interval);

        setTimeout(() => {
            loader.classList.add("hide");

            setTimeout(() => {

                initReveal();

            }, 500);loader.classList.add("hide");

        },300);

    }

},50);
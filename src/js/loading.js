const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

// Cek apakah loader sudah pernah ditampilkan
if (sessionStorage.getItem("loaderShown")) {

    loader.style.display = "none";

} else {

    sessionStorage.setItem("loaderShown", "true");

    let progress = 0;

    const interval = setInterval(() => {

        progress++;

        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loader.classList.add("hide");

            }, 300);

        }

    }, 40);

}
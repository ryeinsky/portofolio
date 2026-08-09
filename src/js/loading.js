const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

if (loader) {
    if (sessionStorage.getItem("loaderShown")) {
        loader.style.display = "none";
    } else {
        sessionStorage.setItem("loaderShown", "true");

        let progress = 0;
        // Interval 28ms x 100 = ~2.8 detik untuk animasi progress bar yang halus dan rileks
        const interval = setInterval(() => {
            progress++;
            if (progressBar) progressBar.style.width = progress + "%";
            if (progressText) progressText.textContent = progress + "%";

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.classList.add("hide");
                }, 400);
            }
        }, 28);
    }
}

function finishLoadingState() {
    document.body.classList.remove("loading");
}

if (document.readyState === "complete") {
    finishLoadingState();
} else {
    window.addEventListener("load", finishLoadingState);
    setTimeout(finishLoadingState, 3500); // Safety fallback
}
const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

if (loader) {
    const DURATION_MS = 3000; // 3.0 detik
    let startTimestamp = null;

    function renderProgress(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progressRatio = Math.min(elapsed / DURATION_MS, 1);
        const percentage = Math.min(Math.floor(progressRatio * 100), 100);

        if (progressBar) {
            progressBar.style.width = (progressRatio * 100) + "%";
        }
        if (progressText) {
            progressText.textContent = percentage + "%";
        }

        if (progressRatio < 1) {
            requestAnimationFrame(renderProgress);
        } else {
            if (progressBar) progressBar.style.width = "100%";
            if (progressText) progressText.textContent = "100%";

            // Jeda singkat setelah 100% sebelum memulai transisi fade out
            setTimeout(() => {
                loader.classList.add("hide");
                finishLoadingState();
                setTimeout(() => {
                    loader.style.display = "none";
                }, 900);
            }, 350);
        }
    }

    // Jalankan animasi frame-by-frame yang halus
    requestAnimationFrame(renderProgress);
}

function finishLoadingState() {
    document.body.classList.remove("loading");
}

if (document.readyState === "complete") {
    finishLoadingState();
} else {
    window.addEventListener("load", finishLoadingState);
    setTimeout(finishLoadingState, 6500); // Safety fallback
}
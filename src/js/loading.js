const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const navigationEntry = performance.getEntriesByType("navigation")[0];

const navigationType = navigationEntry
    ? navigationEntry.type
    : "navigate";

const hasVisited = sessionStorage.getItem("hasVisited");

const shouldShowLoader =
    !hasVisited || navigationType === "reload";

if (!shouldShowLoader) {

    if (loader) {
        loader.style.display = "none";
        loader.classList.remove("hide");
    }

    finishLoadingState();

} else {

    // Tandai bahwa user sudah pernah mengunjungi website
    sessionStorage.setItem("hasVisited", "true");


    if (loader) {

        const DURATION_MS = 3000; // 3 detik
        let startTimestamp = null;


        function renderProgress(timestamp) {

            if (!startTimestamp) {
                startTimestamp = timestamp;
            }

            const elapsed = timestamp - startTimestamp;

            const progressRatio = Math.min(
                elapsed / DURATION_MS,
                1
            );

            const percentage = Math.min(
                Math.floor(progressRatio * 100),
                100
            );


            // Update progress bar
            if (progressBar) {
                progressBar.style.width =
                    (progressRatio * 100) + "%";
            }


            // Update angka percentage
            if (progressText) {
                progressText.textContent =
                    percentage + "%";
            }


            // Lanjutkan animasi
            if (progressRatio < 1) {

                requestAnimationFrame(renderProgress);

            } else {

                // Pastikan 100%
                if (progressBar) {
                    progressBar.style.width = "100%";
                }

                if (progressText) {
                    progressText.textContent = "100%";
                }


                // Jeda sebelum fade out
                setTimeout(() => {

                    loader.classList.add("hide");

                    finishLoadingState();


                    // Tunggu animasi fade selesai
                    setTimeout(() => {

                        loader.style.display = "none";

                    }, 900);

                }, 350);
            }
        }


        // Mulai animasi loading
        requestAnimationFrame(renderProgress);
    }
}

function finishLoadingState() {

    document.body.classList.remove("loading");
}

if (shouldShowLoader) {

    if (document.readyState === "complete") {

        finishLoadingState();

    } else {

        window.addEventListener(
            "load",
            finishLoadingState
        );


        // Safety fallback
        setTimeout(
            finishLoadingState,
            6500
        );
    }
}
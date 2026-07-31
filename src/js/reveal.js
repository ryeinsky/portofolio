const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observerCallback = (entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal");
        }

    });

};

const observer = new IntersectionObserver(
    observerCallback,
    observerOptions
);

function initReveal() {

    document.querySelectorAll(".section").forEach(section => {

        observer.observe(section);

    });

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
} else {
    initReveal();
}
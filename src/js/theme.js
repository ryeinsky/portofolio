/**
 * Theme Toggle System (Dark / Light Mode)
 * Persists selected theme state across pages using localStorage.
 */
(function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const isLight = document.body.classList.contains("light-mode");
            localStorage.setItem("theme", isLight ? "light" : "dark");
        });
    }
});

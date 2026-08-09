const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", function(e){
        const href = this.getAttribute("href");

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("http") ||
            this.getAttribute("target") === "_blank"
        ){
            return;
        }

        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

window.addEventListener("pageshow", () => {
    document.body.classList.remove("fade-out");
});
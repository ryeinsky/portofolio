const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("http")
        ){
            return;
        }

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 400);

    });

});
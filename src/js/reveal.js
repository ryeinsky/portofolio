const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observerCallback = (entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("scroll-reveal");
        }

    });

};

const observer = new IntersectionObserver(
    observerCallback,
    observerOptions
);

document.querySelectorAll(".section").forEach(section => {

    observer.observe(section);

    const rect = section.getBoundingClientRect();

    if(rect.top < window.innerHeight && rect.bottom > 0){
        section.classList.add("scroll-reveal");
    }

});
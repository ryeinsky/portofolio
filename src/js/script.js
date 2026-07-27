const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

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

        },400);

    });

});

/*
   SCROLL REVEAL FADE-IN DENGAN INTERSECTION OBSERVER
   Menambahkan efek fade-in halus ketika section masuk viewport
   Menggunakan Intersection Observer untuk performa optimal
*/

// Opsi untuk Intersection Observer
// threshold: 0.1 berarti animasi dimulai saat 10% element sudah terlihat
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Sedikit tambahan margin untuk trigger lebih cepat
};

// Callback function ketika element masuk/keluar viewport
const observerCallback = (entries) => {
    entries.forEach(entry => {
        // Jika element masuk viewport dan belum memiliki class scroll-reveal
        if (entry.isIntersecting && !entry.target.classList.contains('scroll-reveal')) {
            // Tambahkan class untuk memicu animasi fade-in
            entry.target.classList.add('scroll-reveal');
        }
    });
};

// Buat Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe semua section dan trigger fade-in jika sudah terlihat saat page load
const allSections = document.querySelectorAll('.section');
allSections.forEach(section => {
    observer.observe(section);
    
    // Cek apakah section sudah terlihat di viewport saat page load
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Section sudah terlihat, langsung tambah class scroll-reveal
        section.classList.add('scroll-reveal');
    }
});

// ===========================
// Typing Effect
// ===========================

const words = [
    "Informatics Student at UPN Veteran Jawa Timur",
    "QA & Software Testing Engineer",
    "Test Case Designer",
    "Manual Tester",
    "Bug Hunter",
    "Quality-Focused Developer",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
            currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent =
            currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();
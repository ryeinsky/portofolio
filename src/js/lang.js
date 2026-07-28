// ==============================
// Language Switch
// ==============================

const langToggle = document.getElementById("langToggle");

// ------------------------------
// Semua teks website
// ------------------------------

const translations = {

    id: {

        eyebrow: "HALO, SAYA",

        heroTitle:
            "Reina Sulistyani Arifin",

        heroTyping: [
            "Mahasiswa Informatika UPN Veteran Jawa Timur",
            "Peminat Quality Assurance & Pengujian Perangkat Lunak",
            "Perancang Test Case",
            "Penguji Manual Perangkat Lunak",
            "Pencari dan Pelapor Bug",
            "Pengembang yang Berorientasi pada Kualitas"
        ],

        heroDesc:
            "Mahasiswa Informatika yang memiliki minat pada Quality Assurance dan Software Testing. Saya senang belajar, memecahkan masalah, serta membangun perangkat lunak yang berkualitas.",

        btnAchievement:
            "Lihat Pencapaian",

        btnContact:
            "Hubungi Saya",

        btnOutline:
            "Pelajari lebih lanjut"

    },

    en: {

        eyebrow: "HELLO, I'M",

        heroTitle:
            "Reina Sulistyani Arifin",

        heroTyping: [
            "Informatics Student at UPN Veteran Jawa Timur",
            "QA & Software Testing Enthusiast",
            "Test Case Designer",
            "Manual Tester",
            "Bug Hunter",
            "Quality-Focused Developer"
        ],

        heroDesc:
            "Informatics student with a strong interest in Quality Assurance and Software Testing. I enjoy learning, solving problems, and building reliable digital solutions.",

        btnAchievement:
            "View My Achievements",

        btnContact:
            "Contact Me",

        btnOutline:
            "Learn More"

    }

};


// ==============================
// Ganti Bahasa
// ==============================

function setLanguage(lang){

    // Hero
    document.querySelector(".eyebrow").textContent =
        translations[lang].eyebrow;

    document.querySelector("h1").textContent =
        translations[lang].heroTitle;

    document.querySelector(".hero-text p:last-of-type").textContent =
        translations[lang].heroDesc;

    // Button
    document.querySelector(".btn-primary").textContent =
        translations[lang].btnAchievement;

    document.querySelector(".btn-secondary").textContent =
        translations[lang].btnContact;

    // Typing Effect
    setTypingWords(
    translations[lang].heroTyping
    );

    // Simpan bahasa
    localStorage.setItem("language", lang);

}


// ==============================
// Toggle
// ==============================

langToggle.addEventListener("change",()=>{

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        if(langToggle.checked){

            setLanguage("en");

        }else{

            setLanguage("id");

        }

        document.body.classList.remove("fade-out");

    },200);

});


// ==============================
// Saat halaman dibuka
// ==============================

const savedLanguage =
    localStorage.getItem("language") || "en";

setLanguage(savedLanguage);

langToggle.checked =
    savedLanguage === "en";
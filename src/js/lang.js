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
            "Mahasiswa Informatika yang memiliki ketertarikan pada Quality Assurance dan Software Testing. Saya senang menganalisis aplikasi, menemukan bug, serta memastikan kualitas perangkat lunak melalui pengujian yang teliti.",

        btnAchievement:
            "Lihat Pencapaian",

        btnContact:
            "Hubungi Saya"

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
            "Informatics Student | QA & Software Testing Enthusiast. Passionate about quality assurance, problem-solving, and continuous learning. I believe in building reliable software through meticulous testing and analytical thinking.",

        btnAchievement:
            "View My Achievements",

        btnContact:
            "Contact Me"

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
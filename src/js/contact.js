const form = document.getElementById("contact-form");
const popup = document.getElementById("success-popup");
const closeBtn = document.getElementById("close-popup");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    submitBtn.disabled = true;

    // Loading
    submitBtn.innerHTML = `
        Sending...
        <i class="fa-solid fa-spinner fa-spin"></i>
    `;

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            // Reset form
            form.reset();

            // Show popup
            popup.classList.add("show");

        } else {

            alert("Failed to send message.");

        }

    } catch (error) {

        alert("Unable to send message. Please check your connection.");

    }

    // Kembalikan tombol
    submitBtn.disabled = false;

    submitBtn.innerHTML = `
        Send Message
        <i class="fa-solid fa-paper-plane"></i>
    `;

});


// Close popup
closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");

});
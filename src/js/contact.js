const form = document.getElementById("contact-form");
const popup = document.getElementById("success-popup");
const closeBtn = document.getElementById("close-popup");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const response = await fetch(form.action,{
        method:"POST",
        body:new FormData(form),
        headers:{
            Accept:"application/json"
        }
    });

    if(response.ok){

        form.reset();

        popup.classList.add("show");

    }else{

        alert("Failed to send message.");

    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";

});

closeBtn.addEventListener("click",()=>{

    popup.classList.remove("show");

});
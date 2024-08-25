const contact = document.querySelector(".contact-p");
const contactInfo = document.getElementById("contact-popup-id");

contact.addEventListener("click", () => {
    if (contactInfo.style.display === "block") {
        contactInfo.style.display = "none";
    } else {
        contactInfo.style.display = "block";
    }
});
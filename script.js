const homeButton = document.querySelector('nav a[href="#home"]');
const homeSection = document.getElementById("home");

homeButton.addEventListener("click", function(event) {
    event.preventDefault();

    homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
const productButton = document.querySelector('nav a[href="#products"]');
const productSection = document.getElementById("products");

productButton.addEventListener("click", function(event) {
    event.preventDefault();

    productSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


const addersButton = document.querySelector('nav a[href="#adders"]');
const addersSection = document.getElementById("adders");

addersButton.addEventListener("click", function(event) {
    event.preventDefault();

    addersSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


const contactButton = document.querySelector('nav a[href="#contact"]');
const contactSection = document.getElementById("contact");

contactButton.addEventListener("click", function(event) {
    event.preventDefault();

    contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
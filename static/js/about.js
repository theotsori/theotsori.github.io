document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");
    const aboutLink = document.querySelector('a[href="#about"]');
    
    // Smooth scroll to "About" section when the link is clicked
    aboutLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: "smooth",
        });
    });
});

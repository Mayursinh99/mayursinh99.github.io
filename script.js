document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            let scrollY = window.scrollY;

            if (scrollY >= sectionTop - sectionHeight / 2) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });
});

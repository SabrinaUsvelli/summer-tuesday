window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader")?.remove();
        fadeIn();
    }, 500);
});
window.addEventListener("scroll", fadeIn);
function fadeIn() {
    const elementsArray = document.querySelectorAll(".scroll-fade-in");
    elementsArray.forEach(elem => {
        const distInView = elem.getBoundingClientRect().top - window.innerHeight + 40;
        if (distInView < 0) {
            elem.classList.add("visible");
        } else {
            elem.classList.remove("visible");
        }
    });
}
//ye i def need to give a look back at python
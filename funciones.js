const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
}

const temaLuz = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "ligth");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "ligth"? temaOscuro() : temaLuz();
}
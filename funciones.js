const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-tema", "dark");
}

const temaLuz = () => {
    document.querySelector("body").setAttribute("data-tema", "light");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-tema") === "light" ? temaOscuro() : temaLuz();
}

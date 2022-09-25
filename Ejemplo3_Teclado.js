const d = document;

export function shortcutsall(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e);

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmación con el teclado");
    }
    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado");
    }
}

export function shortcutssimp(e) {
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}
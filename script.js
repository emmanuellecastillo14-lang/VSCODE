function abrirPaquete() {

    document.getElementById("som").play();

    const left = document.getElementById("left");
    const right = document.getElementById("right");

    left.style.transform = "translateX(-200px) rotate(-20deg)";
    right.style.transform = "translateX(200px) rotate(20deg)";

    setTimeout(() => {
        window.location.href = "main.html";
    }, 1500);
}
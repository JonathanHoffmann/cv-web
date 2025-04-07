document.addEventListener("mousemove", (e) => {
    const overlay = document.querySelector(".dark-overlay");
    overlay.style.setProperty("--x", `${e.clientX}px`);
    overlay.style.setProperty("--y", `${e.clientY}px`);
});

document.getElementById("darkmode").addEventListener("input", (e) => {
    var target = e.target.value;
    if (target == e.target.min) {
        target = 0;
    }
    document.getElementById("dark-overlay").style.background = "rgba(0,0,0," + target + ")";
});

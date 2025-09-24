const text = document.getElementById('text');

document.addEventListener("mousemove", (e) => {
    let rect = text.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    text.style.setProperty("--x", x + "px");
    text.style.setProperty("--y", y + "px");
})

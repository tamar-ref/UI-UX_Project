const overlay = document.getElementById("overlay");
const checkbox = document.getElementById("menu-toggle");
overlay.addEventListener("click", () => {
    checkbox.checked = false;
});
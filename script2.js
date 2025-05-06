document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }, 500 + index * 300);
    });
});

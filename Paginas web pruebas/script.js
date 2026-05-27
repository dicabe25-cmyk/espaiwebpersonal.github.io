document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelectorAll('.list');
    const path = window.location.pathname.split("/").pop() || "index.html";

    list.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === path) {
            item.classList.add('active');
        }
    });
});
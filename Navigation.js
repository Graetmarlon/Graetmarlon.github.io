const links = document.querySelectorAll(".NavigationButtons a");
const MainContainer = document.getElementById("MainContainer");

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".NavigationButtons a");
    const MainContainer = document.getElementById("MainContainer");

    async function loadPage(Page) {
        const response = await fetch(Page);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const content = doc.querySelector(".MainContainer");
        MainContainer.innerHTML = content.innerHTML;
    }

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            loadPage(link.getAttribute("href"));
        });
    });

    loadPage("Home.html");
});
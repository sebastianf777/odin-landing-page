const burger = document.getElementsByClassName("burger")[0];
const links = document.getElementsByClassName("links")[0];
burger.addEventListener("click", () => {
links.classList.toggle('active')
})
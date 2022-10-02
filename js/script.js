const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  btn.classList.add("z-index");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  nav.classList.add("z-index");
});

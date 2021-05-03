const body = document.querySelector("body");
const btnOpen = document.getElementById("#btn-open");

if (btnOpen) {
  btnOpen.addEventListener("click", (e) => {
    body.classList.add("open-menu");
    console.log("#btn-open", "click");
  });
}

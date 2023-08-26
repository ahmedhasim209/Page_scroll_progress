let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop;
  el.style.width = `${(scroll / height) * 100}%`;
});

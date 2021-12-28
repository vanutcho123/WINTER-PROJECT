const shoppingItem1 = document.querySelectorAll(".header-shopping-item")[1];
const shoppingItem2 = document.querySelectorAll(".header-shopping-item")[2];

const modalSearch = document.querySelector(".bg-modal-search");
const closeSearch = document.querySelector(".close-search");
const closeSidebar = document.querySelector(".close-sidebar");
const search = document.querySelector(".modal-search");

const sidebar = document.querySelector(".sidebar");

shoppingItem1.addEventListener("click", () => {
  modalSearch.classList.toggle("show-modal-search");
});
closeSearch.addEventListener("click", () => {
  modalSearch.classList.remove("show-modal-search");
});
shoppingItem2.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

const headerBot = document.querySelector(".header-bot");
console.log(headerBot);
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = headerBot.getBoundingClientRect().height;
  if (scrollHeight > 200) {
    headerBot.classList.add("show-header-bot");
  }
  if (scrollHeight < navHeight) {
    headerBot.classList.remove("show-header-bot");
  }
});

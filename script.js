const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".price-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const size = tab.dataset.size;
    document.querySelectorAll(".price-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".price").forEach((price) => {
      const value = price.dataset[`price${size[0].toUpperCase()}${size.slice(1)}`];
      if (value) price.textContent = `${value} ₽`;
    });
  });
});
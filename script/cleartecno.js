window.addEventListener("scroll", function() {
    var menu = document.querySelector("#burguer");
    if (window.pageYOffset > 20) {
      menu.classList.add("menu-hamburguer-scroll");
    } else {
      menu.classList.remove("menu-hamburguer-scroll");
    }
  });
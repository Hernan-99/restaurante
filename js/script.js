const mostrarMenu = document.getElementById("btn");
const menuTabs = document.getElementById("menuTabs");
const menuSection = document.querySelector(".menu-section");

/*-------------------------------------------------------*/
/*           FUNCION PARA MOSTRAR Y OCULTAR MENU         */
/*-------------------------------------------------------*/
const mostrarOcultar = () => {
  mostrarMenu.classList.toggle("activar");
  document.getElementById("nav").classList.toggle("mostrar");
};

/*-------------------------------------------------------*/
/*    EVENTOS DE CLICK PARA LA FUNCION MOSTRAROCULTAR    */
/*-------------------------------------------------------*/
mostrarMenu.addEventListener("click", mostrarOcultar);

document.addEventListener("click", e => {
  if (e.target.closest(".nav-item")) {
    mostrarOcultar();
  }
});

/*-------------------------------------------------------*/
/*    MENU TABS    */
/*-------------------------------------------------------*/
menuTabs.addEventListener("click", e => {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");
    // console.log(target);
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // const menuSection = document.querySelector(".menu-section");
    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
  }
});

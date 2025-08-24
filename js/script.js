const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// galeria bicicletas
const galeria = document.querySelectorAll(".bicicleta-lista img");
const galeriaContainer = document.querySelector(".bicicleta-lista ");

function trocarImagem(event) {
  const img = event.currentTarget;
  console.log(img);
  galeriaContainer.prepend(img);
}
function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

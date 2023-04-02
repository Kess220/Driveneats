function verificar() {
  const verification = document.querySelectorAll(".escolhido").length;
  const footer = document.querySelector("footer");

  if (verification === 3) {
    footer.firstElementChild.classList.add("escolhido");
    footer.firstElementChild.classList.remove("escolhido");
  }
}
function selectionPrato(prato) {
  let pratoSelection = document.querySelector(".prato .escolhido");

  if (!!pratoSelection) {
    pratoSelection.classList.remove("escolhido");
  }
  prato.classList.add("escolhido");
  verificar();
}

function selectionBebida(bebida) {
  let bebidaSelection = document.querySelector(".bebida .escolhido");
  if (!!bebidaSelection) {
    bebidaSelection.classList.remove("escolhido");
  }

  bebidaSelection.classList.add("escolhido");
  verificar();
}

function selectionSobremesa(sobremesa) {
  let sobremesaSelection = document.querySelector(".sobremesa .escolhido");

  if (!!sobremesaSelection) {
    sobremesaSelection.classList.remove(".escolhido");
  }

  sobremesa.classList.add(".escolhido");
  verificar();
}

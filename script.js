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

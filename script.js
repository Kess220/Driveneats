function pratoSelection(prato) {
  let pratoSelecionado = document.querySelector(".pratos .escolhido");

  if (!!pratoSelecionado) {
    pratoSelecionado.classList.remove("escolhido");
  }

  prato.classList.add("escolhido");
  verificarSelecao();
}

function bebidaSelection(bebida) {
  let bebidaSelecionada = document.querySelector(".bebidas .escolhido");

  if (!!bebidaSelecionada) {
    bebidaSelecionada.classList.remove("escolhido");
  }

  bebida.classList.add("escolhido");
  verificarSelecao();
}

function sobremesaSelection(sobremesa) {
  let sobremesaSelecionada = document.querySelector(".sobremesas .escolhido");

  if (!!sobremesaSelecionada) {
    sobremesaSelecionada.classList.remove("escolhido");
  }

  sobremesa.classList.add("escolhido");
  verificarSelecao();
}

function fechandoPedido() {
  let pedido = {};
  let pratoSelecionado = document.querySelector(".pratos .escolhido");
  let bebidaSelecionada = document.querySelector(".bebidas .escolhido");
  let sobremesaSelecionada = document.querySelector(".sobremesas .escolhido");

  const nomePrato = pratoSelecionado.querySelector(".name").innerHTML;
  const nomeBebida = bebidaSelecionada.querySelector(".name").innerHTML;
  const nomeSobremesa = sobremesaSelecionada.querySelector(".name").innerHTML;

  const pratoP = formatarPreco(pratoSelecionado);
  const bebidaP = formatarPreco(bebidaSelecionada);
  const sobremesaP = formatarPreco(sobremesaSelecionada);

  const precoTotal = (pratoP + bebidaP + sobremesaP).toFixed(2);

  pedido = {
    nomePrato,
    nomeBebida,
    nomeSobremesa,
    pratoP,
    bebidaP,
    sobremesaP,
    precoTotal,
  };

  return pedido;
}
function verificarSelecao() {
  const verifica = document.querySelectorAll(".escolhido").length;
  const footer = document.querySelector("footer");

  if (verifica === 3) {
    footer.firstElementChild.classList.add("escondido");
    footer.lastElementChild.classList.remove("escondido");
  }
}

function formatarPreco(valor) {
  let preco = valor
    .querySelector(".valor")
    .innerHTML.replace("R$", "")
    .replace(",", ".");

  preco = (Number(preco) * 100) / 100;

  return preco;
}

function enviaPedido() {
  const { nomePrato, nomeBebida, nomeSobremesa, precoTotal } = fechandoPedido();

  const pedidoMsg = `Olá, gostaria de fazer o pedido: \n
    -Prato: ${nomePrato} \n
    -Bebida: ${nomeBebida} \n
    -Sobremesa: ${nomeSobremesa} \n
    Total: R$ ${precoTotal}`;

  const zipzop = `https://wa.me/5588981986765?text=${encodeURIComponent(
    pedidoMsg
  )}`;

  window.open(zipzop);
}
function confirmaPedido() {
  document
    .querySelector(".tela-de-confirmacao")
    .classList.remove("nenhuma-selecao");

  monstraItensDoPedido();
}
function cancelarPedido() {
  document
    .querySelector(".tela-de-confirmacao")
    .classList.add("nenhuma-selecao");

  const finalizarPedido = document.querySelector("footer");

  finalizarPedido.firstElementChild.classList.remove("escondido");
  finalizarPedido.lastElementChild.classList.add("escondido");

  let itensEscolhidos = document.querySelectorAll(".escolhido");

  itensEscolhidos.forEach((item) => {
    item.classList.remove("escolhido");
  });
}

function monstraItensDoPedido() {
  const {
    nomePrato,
    nomeBebida,
    nomeSobremesa,
    pratoP,
    bebidaP,
    sobremesaP,
    precoTotal,
  } = fechandoPedido();

  const itensDoPedido = document.querySelector(".itens-confirmacao");
  itensDoPedido.innerHTML = `
    <li class="item">
      <h7 class="nome">${nomePrato}</h7>
      <h7 class="preco">${pratoP.toFixed(2)}</h7>
    </li>
    <li class="item">
    <h7 class="nome">${nomeBebida}</h7>
    <h7 class="preco">${bebidaP.toFixed(2)}</h7>
    </li>
    <li class="item">
    <h7 class="nome">${nomeSobremesa}</h7>
    <h7 class="preco">${sobremesaP.toFixed(2)}</h7>
    </li>
    <li class="item total">
      <h5 class="total-texto">TOTAL</h5>
      <h5 class="total-valor">R$ ${precoTotal}</h5>
    </li>
  `;
}

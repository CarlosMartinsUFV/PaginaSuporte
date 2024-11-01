export function controlComponentsInput() {
  // Abre as listas dos inputs com as opções disponíveis
  const openInputs = document.querySelectorAll(".input-icon-wrapper");

  //adiciona a class ao próximo elemento do target
  const inputOpen = "active-list";
  function openInput(event) {
    event.target.nextElementSibling.classList.add(inputOpen);
  }

  //faz um loop com os elementos input selecionados e adiciona um evento de click para cara um, tendo a função de adicionar a classe como callback
  openInputs.forEach((e) => {
    e.addEventListener("click", openInput);
  });

  //seleciona o body e div com as opções, relacionadas a cada input
  const documentBody = document.querySelector("body");
  const listInputs = document.querySelectorAll(".input-lista"); //div com a lista dos inputs

  //callback do evento de click no body
  function closeInput({ target }) {
    //se o target não contem o atributo, um loop remove todas as classes 'active'
    if (!target.hasAttribute("data-control")) {
      listInputs.forEach((item) => {
        item.classList.remove(inputOpen);
      });
    }
  }
  documentBody.addEventListener("click", closeInput);

  const itensLista = document.querySelectorAll(".item-lista");

  function toggleCheckbox({ target }) {
    // Verifica se o clique não foi no input ou na label

    if (target.tagName !== "INPUT" && target.tagName !== "LABEL") {
      const itemSelecionado = target;
      itemSelecionado.querySelector("input").click();
    }
  }

  itensLista.forEach((item) => {
    item.addEventListener("click", toggleCheckbox);
  });
}

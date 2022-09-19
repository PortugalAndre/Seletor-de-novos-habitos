function start() {
  var botaoSorteio = document.querySelector('#botao-sorteio');
  botaoSorteio.addEventListener('click', handleButtonClick);
}

function sorteio() {}

function handleButtonClick() {
  var resultadoSorteio = document.querySelector('#resultado-sorteio');

  resultadoSorteio.textContent = 'Ler 5 páginos de um livro';
}

start();

function start() {
  var botaoSorteio = document.querySelector('#botao-sorteio');
  botaoSorteio.addEventListener('click', handleButtonClick);
}

function sorteio() {}

function handleButtonClick() {
  var resultadoSorteio = document.querySelector('#resultado-sorteio');

  const habitos = [
    'Ler 5 páginos de um livro',
    'Caminhar',
    'Aprender',
    'Visitar Amigo',
  ];

  const sorteado = [];

  const index = Math.floor(Math.random() * habitos.length - 1);
  const [habito] = habitos.splice(index, 1);
  sorteado.push(habito);

  resultadoSorteio.textContent = sorteado;

  //resultadoSorteio.textContent = 'Ler 5 páginos de um livro';
}

start();

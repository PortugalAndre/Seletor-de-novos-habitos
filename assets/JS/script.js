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

  const habitoSorteado = [];

  const index = Math.floor(Math.random() * habitos.length - 1);
  const [habito] = habitos.splice(index, 1);
  habitoSorteado.push(habito);

  resultadoSorteio.textContent = habitoSorteado;

  //resultadoSorteio.textContent = 'Ler 5 páginos de um livro';
}

start();

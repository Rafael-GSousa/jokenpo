// Mensagem na Tela = "Ganhou", "Perdeu", "Empate"
const ganhouPerdeu = document.querySelector("#ganhouPerdeu");

// Saída onde irá aparacer a opção escolhida pelo jogador e pelo PC
const saidaVoce = document.querySelector("#saidaVoce");
const saidaPC = document.querySelector("#saidaPC");

// Imagens "pedra", "papel", "tesoura", "versus", "caixa do mário"
const pedra = document.querySelector(".pedra");
const papel = document.querySelector(".papel");
const tesoura = document.querySelector(".tesoura");
const versus = document.querySelector(".versus");
const caixaMario = document.querySelector(".caixa-mario");

// Botões "play", "restart"
const play = document.querySelector(".play");
const restart = document.querySelector(".restart");

// Saída do placar de cada jogador
const seuPlacar = document.querySelector("#seuPlacar");
const placarPC = document.querySelector("#placarPC");

// Array com as opções para serem selecionadas pelo PC de forma aleatória. A escolha será adicionada na variável "escolhaPC"
const opcoes = ["pedra", "papel", "tesoura"];
let escolhaPC = 0;

// Contagem da pontuação de cada jogador
let seuPonto = 0;
let pontoPC = 0;

// Cor de fundo para a opção que estiver ativa
const fundoAtivo = "rgba(134, 21, 21, 0.39)";

//
let fundoAtivoPedra, fundoAtivoPapel, fundoAtivoTesoura;

// Tags das imagens que serão trocadas na tela
const imgPedra = '<img src="./img/pedra.png" alt="" class="pedra"/>';
const imgPapel = '<img src="./img/papel.png" alt="" class="papel"/>';
const imgTesoura = '<img src="./img/tesoura.png" alt="" class="tesoura"/>';

// Evento de click para cada imagem, alterando sua cor de fundo
pedra.addEventListener("click", () => mudaFundo(pedra, papel, tesoura));
papel.addEventListener("click", () => mudaFundo(papel, pedra, tesoura));
tesoura.addEventListener("click", () => mudaFundo(tesoura, pedra, papel));

// Evento de click para inciar e resetar o jogo
play.addEventListener("click", iniciarJogo);
restart.addEventListener("click", () => location.reload());

// Função que altera a cor de fundo da opção ativa
function mudaFundo(imgAtiva, imgInativa1, imgInativa2) {
  if (imgAtiva === pedra) {
    fundoAtivoPedra = pedra.style.backgroundColor = fundoAtivo;
    fundoAtivoPapel = false;
    fundoAtivoTesoura = false;
  } else if (imgAtiva === papel) {
    fundoAtivoPapel = papel.style.backgroundColor = fundoAtivo;
    fundoAtivoPedra = false;
    fundoAtivoTesoura = false;
  } else {
    fundoAtivoTesoura = tesoura.style.backgroundColor = fundoAtivo;
    fundoAtivoPedra = false;
    fundoAtivoPapel = false;
  }

  imgInativa1.style.backgroundColor = "transparent";
  imgInativa2.style.backgroundColor = "transparent";
}

function iniciarJogo() {
  escolhaPC = Math.floor(Math.random() * opcoes.length);

  if (
    (escolhaPC === 0 && fundoAtivoPapel) ||
    (escolhaPC === 1 && fundoAtivoTesoura) ||
    (escolhaPC === 2 && fundoAtivoPedra)
  ) {
    ganhouPerdeu.innerHTML = "VOCÊ GANHOU!";
    ganhouPerdeu.style.color = "green";
    seuPonto += 1;
    seuPlacar.innerHTML = seuPonto;
    escolhas();
  } else if (
    (escolhaPC === 0 && fundoAtivoPedra) ||
    (escolhaPC === 1 && fundoAtivoPapel) ||
    (escolhaPC === 2 && fundoAtivoTesoura)
  ) {
    ganhouPerdeu.innerHTML = "EMPATE!";
    ganhouPerdeu.style.color = "blue";
    escolhas();
  } else if (!fundoAtivoPedra && !fundoAtivoPapel && !fundoAtivoTesoura) {
    alert("Escolha uma opção antes de jogar!");
    seuPlacar.style.backgroundColor = "transparent";
    placarPC.style.backgroundColor = "transparent";
  } else {
    ganhouPerdeu.innerHTML = "VOCÊ PERDEU!";
    ganhouPerdeu.style.color = "red";
    pontoPC += 1;
    placarPC.innerHTML = pontoPC;
    escolhas();
  }
}

function escolhas() {
  if (escolhaPC === 0) {
    saidaPC.innerHTML = imgPedra;
  } else if (escolhaPC === 1) {
    saidaPC.innerHTML = imgPapel;
  } else {
    saidaPC.innerHTML = imgTesoura;
  }

  if (fundoAtivoPedra && !fundoAtivoPapel && !fundoAtivoTesoura) {
    saidaVoce.innerHTML = imgPedra;
  } else if (fundoAtivoPapel && !fundoAtivoPedra && !fundoAtivoTesoura) {
    saidaVoce.innerHTML = imgPapel;
  } else if (fundoAtivoTesoura && !fundoAtivoPedra && !fundoAtivoPapel) {
    saidaVoce.innerHTML = imgTesoura;
  }
  corPlacar();
}

function corPlacar() {
  if (pontoPC > seuPonto) {
    seuPlacar.style.color = "red";
    placarPC.style.color = "green";
  } else if (pontoPC < seuPonto) {
    seuPlacar.style.color = "green";
    placarPC.style.color = "red";
  } else {
    seuPlacar.style.color = "blue";
    placarPC.style.color = "blue";
  }
}

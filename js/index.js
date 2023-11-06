const ganhouPerdeu = document.querySelector("#ganhouPerdeu");

const saidaVoce = document.querySelector("#saidaVoce");
const saidaPC = document.querySelector("#saidaPC");

const pedra = document.querySelector(".pedra");
const papel = document.querySelector(".papel");
const tesoura = document.querySelector(".tesoura");
const versus = document.querySelector(".versus");
const caixaMario = document.querySelector(".caixa-mario");

// botões
const play = document.querySelector(".play");
const restart = document.querySelector(".restart");

const seuPlacar = document.querySelector("#seuPlacar")
const placarPC = document.querySelector("#placarPC")

const opcoes = ["pedra", "papel", "tesoura"];
let escolhaPC = 0;
let seuPonto = 0
let pontoPC = 0

pedra.addEventListener("click", () => mudaFundo(pedra, papel, tesoura));
papel.addEventListener("click", () => mudaFundo(papel, pedra, tesoura));
tesoura.addEventListener("click", () => mudaFundo(tesoura, pedra, papel));
play.addEventListener("click", iniciarJogo);
restart.addEventListener('click', () => location.reload())

function mudaFundo(imgAtiva, imgInativa1, imgInativa2) {
  imgAtiva.style.backgroundColor = "rgba(134, 21, 21, 0.39)";
  imgInativa1.style.backgroundColor = "transparent";
  imgInativa2.style.backgroundColor = "transparent";
}

function iniciarJogo() {
  escolhaPC = Math.floor(Math.random() * opcoes.length);

  if (
    (escolhaPC === 0 &&
      papel.style.backgroundColor === "rgba(134, 21, 21, 0.39)") ||
    (escolhaPC === 1 &&
      tesoura.style.backgroundColor === "rgba(134, 21, 21, 0.39)") ||
    (escolhaPC === 2 &&
      pedra.style.backgroundColor === "rgba(134, 21, 21, 0.39)")
  ) {
    ganhouPerdeu.innerHTML = "VOCÊ GANHOU!";
    ganhouPerdeu.style.color = "green"
    seuPonto += 1
    seuPlacar.innerHTML = seuPonto
    escolhas()
  } else if (
    (escolhaPC === 0 &&
      pedra.style.backgroundColor === "rgba(134, 21, 21, 0.39)") ||
    (escolhaPC === 1 &&
      papel.style.backgroundColor === "rgba(134, 21, 21, 0.39)") ||
    (escolhaPC === 2 &&
      tesoura.style.backgroundColor === "rgba(134, 21, 21, 0.39)")
  ) {
    ganhouPerdeu.innerHTML = "EMPATE!";
    ganhouPerdeu.style.color = "blue"
    escolhas()
  } else if (
    pedra.style.backgroundColor ==! "rgba(134, 21, 21, 0.39)" &&
    papel.style.backgroundColor ==! "rgba(134, 21, 21, 0.39)" &&
    tesoura.style.backgroundColor ==! "rgba(134, 21, 21, 0.39)"
  ) {
    alert("Escolha uma opção antes de jogar!");
    seuPlacar.style.backgroundColor = "none"
    placarPC.style.backgroundColor = "transparent"
  } else {
    ganhouPerdeu.innerHTML = "VOCÊ PERDEU!";
    ganhouPerdeu.style.color = "red"
    pontoPC += 1
    placarPC.innerHTML = pontoPC
    escolhas()
  }

}

function escolhas() {
    if (escolhaPC === 0){
        saidaPC.innerHTML = '<img src="./img/pedra.png" alt="" class="pedra"/>'
    } else if (escolhaPC === 1){
        saidaPC.innerHTML = '<img src="./img/papel.png" alt="" class="papel"/>'
    } else {
        saidaPC.innerHTML = '<img src="./img/tesoura.png" alt="" class="tesoura"/>'
    }

    if (pedra.style.backgroundColor === "rgba(134, 21, 21, 0.39)"){
        saidaVoce.innerHTML = '<img src="./img/pedra.png" alt="" class="pedra"/>'
    } else if (papel.style.backgroundColor === "rgba(134, 21, 21, 0.39)"){
        saidaVoce.innerHTML = '<img src="./img/papel.png" alt="" class="papel"/>'
    } else {
        saidaVoce.innerHTML = '<img src="./img/tesoura.png" alt="" class="tesoura"/>'
    }
    fundoPlacar()
}

function fundoPlacar(){
  if (pontoPC > seuPonto){
  seuPlacar.style.backgroundColor = "red"
  placarPC.style.backgroundColor = "green"
} else if (pontoPC < seuPonto){
  seuPlacar.style.backgroundColor = "green"
  placarPC.style.backgroundColor = "red"
} else {
  seuPlacar.style.backgroundColor = "blue"
  placarPC.style.backgroundColor = "blue"
}
}
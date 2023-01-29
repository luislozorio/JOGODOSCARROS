
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  mostraAtor();
  movimentaAtor();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
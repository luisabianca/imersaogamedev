  
class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.variacaoY = variacaoY;

    this.yInicial = height - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadePulo = 0;
    this.gravidade = 3;

    this.qntPulos = 2;
  }

 pula() {
  if (this.qntPulos > 0) {
   this.velocidadePulo = -35;
   this.qntPulos--;
   somPulo.play();
  }
 }

 aplicaGravidade() {
  this.y += this.velocidadePulo;
  this.velocidadePulo = this.velocidadePulo + this.gravidade;

  if(this.y > this.yInicial) {
    this.y = this.yInicial;
    this.qntPulos = 2;
  }
 }

 estaColidindo(inimigo) {
  const precisao = .6;
  const colisao = collideRectRect(
    this.x, 
    this.y, 
    this.largura*precisao, 
    this.altura*precisao,      
    inimigo.x, 
    inimigo.y,
    inimigo.largura*precisao, 
    inimigo.altura*precisao,
    
  );

  return colisao;
  
 }
 

 marcaPonto(pontos) {
  const precisao = .6;
  const marcaPonto = collideRectRect(
    this.x, 
    this.y, 
    this.largura*precisao, 
    this.altura*precisao,      
    pontos.x, 
    pontos.y,
    pontos.largura*precisao, 
    pontos.altura*precisao,
    
  );

  return marcaPonto;
  
 }

}
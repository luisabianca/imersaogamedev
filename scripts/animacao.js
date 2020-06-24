class Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprit, alturaSprit){
        this.matriz = matriz;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.y = height - this.altura;
        this.larguraSprit = larguraSprit;
        this.alturaSprit = alturaSprit;
        
        this.frameAtual = 0;
    }

    exibe() {
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0],
            this.matriz[this.frameAtual][1], this.larguraSprit, this.alturaSprit);
         
        this.anima();
    }

    anima(){
        this.frameAtual++
          
        if(this.frameAtual >= this.matriz.length - 1) {
          this.frameAtual = 0
        }
    } 

}
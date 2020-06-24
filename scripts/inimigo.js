class Inimigo extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprit, alturaSprit) {
        super(matriz, imagem, x, largura, altura, larguraSprit, alturaSprit)

        this.velocidade = 8
    }
    
    move() {
        this.x = this.x - this.velocidade

        if (this.x < -this.largura) {
            this.x = width
        }
    }
}
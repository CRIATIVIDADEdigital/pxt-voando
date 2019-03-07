let valorDaPausa = 0
input.onButtonPressed(Button.A, function () {
    Jogo.PassarinhoSubir()
})
input.onButtonPressed(Button.B, function () {
    Jogo.PassarinhoDescer()
})
Jogo.CriarPassarinho()
Jogo.GerarObstaculos()
valorDaPausa = 1000
basic.forever(function () {
    Jogo.MoverObstaculos()
    if (Jogo.PassarinhoBateu()) {
        game.gameOver()
    }
    basic.pause(valorDaPausa)
})

input.onButtonPressed(Button.A, function () {
    Jogo.PassarinhoSubir()
})
input.onButtonPressed(Button.B, function () {
    Jogo.PassarinhoDescer()
})
Jogo.CriarPassarinho()
Jogo.GerarObstaculos()
basic.forever(function () {
    Jogo.MoverObstaculos()
    if (Jogo.PassarinhoBateu()) {
        game.gameOver()
    }
    basic.pause(1000)
})

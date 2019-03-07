let passarinho: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    passarinho.change(LedSpriteProperty.Y, 1)
})
Jogo.CriarPassarinho()
Jogo.GerarObstaculos()
basic.forever(function () {
    if (Jogo.PassarinhoBateu()) {
        game.gameOver()
    }
    basic.pause(1000)
})

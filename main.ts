let ticks = 0
let vazioObstaculoY = 0
let obstaculo: game.LedSprite[] = []
let passarinho: game.LedSprite = null
let pausaVelocidade = 0
let indice = 0
input.onButtonPressed(Button.A, function () {
    passarinho.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    passarinho.change(LedSpriteProperty.Y, 1)
})
indice = 0
pausaVelocidade = 1000
passarinho = game.createSprite(0, 2)
passarinho.set(LedSpriteProperty.Blink, 200)
basic.forever(function () {
    while (obstaculo.length > 0 && obstaculo[0].get(LedSpriteProperty.X) == 0) {
        obstaculo.removeAt(0).delete()
    }
    for (let obstaculo2 of obstaculo) {
        obstaculo2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        vazioObstaculoY = Math.randomRange(0, 4)
        for (let indice2 = 0; indice2 <= 4; indice2++) {
            if (indice2 != vazioObstaculoY) {
                obstaculo.push(game.createSprite(4, indice2))
            }
        }
    }
    for (let obstaculo3 of obstaculo) {
        if (obstaculo3.get(LedSpriteProperty.X) == passarinho.get(LedSpriteProperty.X) && obstaculo3.get(LedSpriteProperty.Y) == passarinho.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(pausaVelocidade)
    pausaVelocidade += 0 - 5
})

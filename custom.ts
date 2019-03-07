/**
 * Blocos criados especificamente para controlar o jogo do passarinho.
 */
//% color=190 weight=100 icon="\uf4ba" block="Jogo do Passarinho"
namespace Jogo {
    let passarinho: game.LedSprite = null; //Corresponde a somente um sprite
    let obstaculo: game.LedSprite[] = [];
    let ticks = 0;
    let vazioObstaculoY = 0;
    /**
    * Criar o passarinho usado no jogo
    */
    //% block 
    export function CriarPassarinho(): void {
        passarinho = game.createSprite(0, 2);
        passarinho.set(LedSpriteProperty.Blink, 200);
    }

    /**
    * Verifica se passarinho bateu na parede
    */
    //% block 
    export function PassarinhoBateu(): boolean {
        for (let obstaculo3 of obstaculo) {
            if (obstaculo3.get(LedSpriteProperty.X) == passarinho.get(LedSpriteProperty.X)
                && obstaculo3.get(LedSpriteProperty.Y) == passarinho.get(LedSpriteProperty.Y)) {
                return (true);
            }
        }
        return (false);
    }

    /**
    * Prepara as paredes com os obstáculos
    */
    //% block 
    export function GerarObstaculos(): void {
        indice = 0;
        pausaVelocidade = 1000;
    }

    /**
    * Move para a esquerda a parede com obstáculos
    */
    //% block 
    export function MoverObstaculos(): void {
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
    }
}

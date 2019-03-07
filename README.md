# Jogo do Passarinho
Neste jogo para **Micro:bit** você deverá desviar dos obstáculos para que o "pássaro" continue voando.

## Introdução
Construímos este jogo inspirado no [Flappy Bird](https://pt.wikipedia.org/wiki/Flappy_Bird). 
Para facilitar o entendimento da lógica de funcionamento do jogo, criamos blocos específicos para o seu controle. 

## Como jogar
1. Baixe o jogo no seu computador.
1. Conecte o Micro:bit e transfira o jogo.
1. Para controlar o jogo estão disponíveis os seguintes comandos:
  1. **Botão A**: subir passarinho.<br />
  1. **Botão B**: descer passarinho.<br />
  1. **Botões A+B**: reiniciar o jogo.

## Sugestões de modificação
Quer experimentar modificar a programação deste jogo? Então, confira as sugestões apresentadas abaixo.

### Controlando a velocidade do jogo
A velocidade em que o obstáculo é movimentado é definida pelo valor da variável ``||variables:valorDaPausa||``  "passarinho" vocêPasso um ``||variables:definir valorDaPausa para 1000||``
```blocks
variables.valorDaPausa(1000);
basic.forever(function() {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .`);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .`);
})
```

## Passo 2
Passo dois 

## Créditos
Este jogo foi criado usando como base o código do [Crashy Bird](https://makecode.microbit.org/projects/crashy-bird)

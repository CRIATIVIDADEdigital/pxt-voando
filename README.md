# Jogo do Passarinho
Neste jogo para **Micro:bit** você deverá desviar dos obstáculos para que o "passarinho" continue voando.

## Introdução
[Construímos este jogo](https://youtu.be/AWvPZyU2w_M?t=1m17s) inspirado no [Flappy Bird](https://pt.wikipedia.org/wiki/Flappy_Bird). 
Para facilitar o entendimento da lógica de funcionamento do jogo, criamos blocos específicos para o seu controle. 

## ~avatar

Qualquer dúvida na construção, use o **link (texto azul)** para abrir o vídeo que apresenta como realizar aquele passo. Para acessar o vídeo com o tutorial completo, use [**este link**](https://youtu.be/AWvPZyU2w_M).

## ~

## Como jogar
1. [Baixe](https://youtu.be/AWvPZyU2w_M?t=1m55s) o jogo no seu computador.
1. [Conecte](https://youtu.be/AWvPZyU2w_M?t=2m39s) o Micro:bit e [transfira o jogo](https://youtu.be/AWvPZyU2w_M?t=3m05s).
1. [Para controlar o jogo](https://youtu.be/AWvPZyU2w_M?t=4m31s) estão disponíveis os seguintes comandos:
  1. **Botão A**: subir passarinho.<br />
  1. **Botão B**: descer passarinho.<br />
  1. **Botões A+B**: reiniciar o jogo.

## Sugestões de modificação
[Quer experimentar modificar](https://youtu.be/AWvPZyU2w_M?t=6m20s) a programação deste jogo? Então, confira as sugestões apresentadas abaixo.

### Alterando a velocidade do jogo
[A velocidade de movimentação do obstáculo](https://youtu.be/AWvPZyU2w_M?t=6m34s) é definida pelo valor da variável ``||variables:valorDaPausa||`` que você encontra dentro do bloco ``||basic:no iniciar||`` 

```blocks
let valorDaPausa = 1000
```

[O valor está representado](https://youtu.be/AWvPZyU2w_M?t=6m53s) em milissegundos, ou seja, ``||variables:1000||`` corresponde a 1 segundo. 
Caso você queira acelerar a velocidade dos obstáculos, basta reduzir o valor. 
Por exemplo, altere o valor para ``||variables:500||``.

```blocks
let valorDaPausa = 500
```
Após a alteração veja como ficou o jogo [usando o simulador](https://youtu.be/AWvPZyU2w_M?t=8m12s) ou baixando a nova versão do código no seu Micro:bit.

[Observe como os blocos estão organizados](https://youtu.be/AWvPZyU2w_M?t=9m35s) para o funcionamento do jogo. Perceba que, ao aumentar o valor da variável ``||variable:valorDaPausa||`` nós **reduzimos** a velocidade do jogo. 
Diminuindo o valor da variável ``||variable:valorDaPausa||`` nós **aumentamos** a velocidade do jogo. 
Isso acontece porque esta a variável define o tempo de ``||basic.pausa||`` que o programa utiliza como base para movimentar os obstáculos.

### Alteração automática da velocidade do jogo
[Agora que você já experimentou aumentar a velocidade](https://youtu.be/AWvPZyU2w_M?t=10m24s) do jogo que tal fazer com que isso aconteça automaticamente?

Vamos alterar a programação do jogo para fazê-lo parecer mais um com um *game*. 
Ou seja, o jogo vai aumentar de velocidade a medida que o jogador conseguir manter o seu "passarinho" desviando dos obstáculos.

[Novamente](https://youtu.be/AWvPZyU2w_M?t=10m49s), para o controle da velocidade vamos utilizar a variável ``||variable:valorDaPausa||``.

[Primeiro](https://youtu.be/AWvPZyU2w_M?t=10m53s) vamos alterar o código para que a variável ``||variable:valorDaPausa||`` volte a representar uma pausa de 1 segundo.

```blocks
let valorDaPausa = 1000
```

[O próximo passo](https://youtu.be/AWvPZyU2w_M?t=11m15s) consiste em, a cada pausa do jogo, reduzirmos o valor da variável ``||variable:valorDaPausa||``. 
Para tanto, vamos subtrair o valor desta variável logo após a execução de cada pausa. 
Sugerimos que você experimente subtrair 10 milissegundos a cada pausa. 

[A alteração consiste](https://youtu.be/AWvPZyU2w_M?t=11m30s) em mudar de ``||variable:alterar valorDaPausa por 0||`` para ``||variable:alterar valorDaPausa por -10||``.

Confira como isso ficou no código abaixo.

![Imagem com o programa na forma de blocos](https://raw.githubusercontent.com/CRIATIVIDADEdigital/pxt-voando/master/img/velocidade_automatico.png)

Após a alteração veja como ficou o jogo usando o simulador ou [baixando a nova versão](https://youtu.be/AWvPZyU2w_M?t=12m19s) do código no seu Micro:bit.

## Créditos
Esta atividade foi criado pelo [APRENDER.digital](https://aprender.digital) usando como base o código do [Crashy Bird](https://makecode.microbit.org/projects/crashy-bird).

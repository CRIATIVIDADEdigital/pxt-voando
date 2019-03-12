# Jogo do Passarinho
Neste jogo para **Micro:bit** você deverá desviar dos obstáculos para que o "passarinho" continue voando.

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

### Alterando a velocidade do jogo
A velocidade de movimentação do obstáculo é definida pelo valor da variável ``||variables:valorDaPausa||`` que você encontra dentro do bloco ``||basic:no iniciar||`` 

```blocks
let valorDaPausa = 1000
```

O valor está representado em milissegundos, ou seja, ``||variables:1000||`` corresponde a 1 segundo. 
Caso você queira acelerar a velocidade dos obstáculos, basta reduzir o valor. 
Por exemplo, altere o valor para ``||variables:500||``.

```blocks
let valorDaPausa = 500
```
Após a alteração veja como ficou o jogo usando o simulador ou baixando a nova versão do código no seu Micro:bit.

Portanto, aumentando o valor da variável ``||variable:valorDaPausa||`` nós **reduzimos** a velocidade do jogo. 
Diminuindo o valor da variável ``||variable:valorDaPausa||`` nós **aumentamos** a velocidade do jogo. 
Isso acontece porque esta a variável define o tempo de ``||basic.pausa||`` que o programa utiliza como base para movimentar os obstáculos.

### Alteração automática da velocidade do jogo
Agora que você já experimentou aumentar a velocidade do jogo que tal fazer com que isso aconteça automaticamente?

Vamos alterar a programação do jogo para fazê-lo parecer mais um com um *game*. 
Ou seja, o jogo vai aumentar de velocidade a medida que o jogador conseguir manter o seu "passarinho" desviando dos obstáculos.

Novamente, para o controle da velocidade vamos utilizar a variável ``||variable:valorDaPausa||``.

Primeiro vamos alterar o código para que a variável ``||variable:valorDaPausa||`` volte a representar uma pausa de 1 segundo.

```blocks
let valorDaPausa = 1000
```

O próximo passo consiste em, a cada pausa do jogo, reduzirmos o valor da variável ``||variable:valorDaPausa||``. 
Para tanto, vamos subtrair o valor desta variável logo após a execução de cada pausa. 
Sugerimos que você experimente subtrair 10 milissegundos a cada pausa. 

A alteração consiste em mudar de ``||variable:alterar valorDaPausa por 0||`` para ``||variable:alterar valorDaPausa por -10||``.

Confira como isso ficou no código abaixo.
![Imagem com o programa na forma de blocos](https://raw.githubusercontent.com/CRIATIVIDADEdigital/pxt-voando/master/img/velocidade_automatico.png)

Após a alteração veja como ficou o jogo usando o simulador ou baixando a nova versão do código no seu Micro:bit.

## Créditos
Esta atividade foi criado pelo [APRENDER.digital](https://aprender.digital) usando como base o código do [Crashy Bird](https://makecode.microbit.org/projects/crashy-bird).

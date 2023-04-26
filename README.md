<h1 align="center"> Grace Bot - V. 1.0</h1>

<img align="center" width="300" alt="Logo do bot" src="https://github.com/TayDias/Chatbot-Grace---BLiP-Chat/blob/79d7ec9703362ff72fe0f8e77a4be3394c3dc465/general/grace.jpg">

<p>O objetivo do chatbot desenvolvido é identificar pessoas em situações de violência doméstica através do uso de inteligência artificial e viabilizar o contato com atendimento especializado.</p>

<p>Inicialmente o chatbot teve versões desenvolvidas em Python e também nas plataformas Pandorabots e Botpress. Contudo foi optado por concluir a versão usando o BLiP Chat e o IBM Watson em conjunto, devido a necessidade de agilidade na conclusão.</p>


# Índice

* [Status do projeto](#Status-do-projeto)
* [Tecnologias utilizadas](#Tecnologias-utilizadas)
* [Funcionalidades](#Funcionalidades)
* [Modelo de PLN/NLP](#modelo-de-plnnlp)
* [Execução da aplicação](#Execução-da-aplicação)
* [Configuração do ambiente de teste](#Configuração-do-ambiente-de-teste)
* [Referencias](#Referencias)


# Status do projeto

:heavy_check_mark: Finalizado - Versão 1.0 :heavy_check_mark:


# Tecnologias utilizadas

- [Blip.ai](https://portal.blip.ai/application)
- [IBMWatson](https://www.ibm.com/br-pt/watson)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


# Funcionalidades

- [X] 01 - Manter uma conversa
- [X] 02 - Finalizar conversa ao ser solicitado.
- [X] 03 - Categorizar sentimentos relatados.
- [X] 04 - Identificar relatos de violência doméstica.
- [X] 05 - Direcionar a conversa ao atendimento humano quando identificar violência doméstica.
- [X] 06 - Verificar disponibilidade de horários de atendimento da equipe especializada.
- [X] 07 - Listagem de próximos horários de atendimento da equipe na conversa.
- [X] 08 - Cadastro de usuários atendidos pelo chatbot.
- [X] 09 - Solicitação de feedback ao encerramento da conversa.


# Modelo de PLN/NLP

<p>A interpretação de decisões de usuário e a contextualização de sua situação física e emocional é feita com o processamento de linguagem natural (PLN) do IBM Watson a partir de um modelo de intenções e entidades personalizado. A taxa de confiabilidade deve ser igual ou superior a 75%.</p>

## Intenções

<table>
  <thead>
    <th>Nome da intenção</th>
    <th>Funcionalidade associada</th>
  </thead>
  <body>
    <tr>
      <td>ajuda-especialista</td>
      <td>05 - Direcionar a conversa ao atendimento humano quando identificar violência doméstica</td>
    </tr>
    <tr>
      <td>concordar</td>
      <td>01 - Manter uma conversa</td>
    </tr>
    <tr>
      <td>desabafo</td>
      <td>01 - Manter uma conversa<br/>03 - Categorizar sentimentos relatados<br>04 - Identificar relatos de violência doméstica</td>
    </tr>
    <tr>
      <td>despedida</td>
      <td>02 - Finalizar conversa ao ser solicitado<br>09 - Solicitação de feedback ao encerramento da conversa.</td>
    </tr>
    <tr>
      <td>incerto</td>
      <td>01 - Manter uma conversa</td>
    </tr>
    <tr>
      <td>negar</td>
      <td>01 - Manter uma conversa</td>
    </tr>
  </body>
</table>

# Entidades

<table>
  <thead>
    <th>Nome da entidade</th>
    <th>Funcionalidade associada</th>
  </thead>
  <body>
    <tr>
      <td>o-que-vdomestica</td>
      <td>04 - Identificar relatos de violência doméstica<br>05 - Direcionar a conversa ao atendimento humano quando identificar violência doméstica</td>
    </tr>
    <tr>
      <td>quem-vdomestica</td>
      <td>04 - Identificar relatos de violência doméstica<br>05 - Direcionar a conversa ao atendimento humano quando identificar violência doméstica</td>
    </tr>
    <tr>
      <td>onde-vdomestica</td>
      <td>04 - Identificar relatos de violência doméstica<br>05 - Direcionar a conversa ao atendimento humano quando identificar violência doméstica</td>
    </tr>
    <tr>
      <td>quando-vdomestica</td>
      <td>04 - Identificar relatos de violência doméstica<br>05 - Direcionar a conversa ao atendimento humano quando identificar violência doméstica</td>
    </tr>
    <tr>
      <td>emocao-positiva</td>
      <td>03 - Categorizar sentimentos relatados</td>
    </tr>
    <tr>
      <td>emocao-negativa</td>
      <td>03 - Categorizar sentimentos relatados</td>
    </tr>
    <tr>
      <td>emocao-indicadora</td>
      <td>03 - Categorizar sentimentos relatados<br>05 - Direcionar a conversa ao atendimento humano quando identificar violência doméstica</td>
    </tr>
  </body>
</table>


# Execução da aplicação

Para usar a versão de produção você vai precisar apenas acessar o [Website](https://bot.pectem.com) do projeto e clicar no ícone de conversa no canto inferior direito da página.

Aviso: As demais funcionalidades do website estão temporariamente indisponíveis devido a plataforma hospedeira do backend ter bloqueado as ferramentas hospedadas gratuitamente.


## Exemplos de frases para testar

Como a base de dados é pequena em função do pouco tempo disponível para desenvolvê-la, aqui está alguns exemplos de frases que você pode testar e que o chatbot entenderá como indicativo de violência doméstica:

* Meu marido começo a jogar as coisas em mim na cozinha depois de discutirmos, fiquei assustada
* Ontem aconteceu de novo, meu namorado me humilhou na frente de todos porque estava com ciumes
* Ela bateu forte no meu braço e ameaçou acabar com a minha vida, hoje esta agindo como se nada tivesse acontecido
* Fui agredida por meu companheiro

# Configuração do ambiente de teste

<p>Para montar um ambiente de testes você vai precisar acesar o portal do <a rel="stylesheet" href="https://portal.blip.ai/application">BLiP</a> e criar uma estrutura de roteador e sub-bots semelhante a mostrada na imagem abaixo.</p>

<img width="1001" alt="Router" src="https://github.com/TayDias/Chatbot-Grace---BLiP-Chat/blob/79d7ec9703362ff72fe0f8e77a4be3394c3dc465/general/configRouter.PNG">

<p>Para o sub-bot "Grace Conectar" o flow importado no builder deve ser o arquivo "chatbotvicauth.json". Para o sub-bot "Grace Dialogo" deve ser carregado o arquivo "gracedialogoprd.json" e para o sub-bot "Grace Principal" deve ser usado o arquivo "chatbotcyberbulleviolencia.json".</p>

<p>Em cada sub-bot as opções "Traking automático" e "Utilizar contexto de Roteador" devem estar ativadas. Deve-se incluir também em "Variáveis de configuração" a url (urlWatson) e a chave de autorização (authorizationWatson) para conexão com o IBM Watson Assistant.</p>

<p>Para criar uma estrutura similar a usada do Watson Assistant acesse o <a rel="stylesheet" href="https://cloud.ibm.com">IBM Cloud</a> e crie um novo serviço do Watson. Após isso, acesse esse serviço na "Lista de Recursos" e crie uma nova Skill do tipo diálogo. Importe as intenções, que estão na pasta "watson/intents", e as entidades da pasta "watson/entities". A url de acesso a essa skill por requisição pode ser consultada na opção "View API Details".</p>

<p>Para mais informações sobre a API do Watson e obtenção da chave de autorização de uma skill consulte a documentação oficial <a rel="stylesheet" href="https://cloud.ibm.com/apidocs/assistant-v2">aqui</a>.</p>


# Referencias

Como escrever um README incrível no seu Github:
https://www.alura.com.br/artigos/escrever-bom-readme

Como fazer um bom README:
https://blog.rocketseat.com.br/como-fazer-um-bom-readme/

Emoji-cheat-sheet:
https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md

TCC - DESENVOLVIMENTO DE UM CHATBOT PARA APOIO A VÍTIMAS DE VIOLÊNCIA DOMÉSTICA:
https://repositorio.animaeducacao.com.br/bitstream/ANIMA/23997/1/TCC-Final-Taynara-Dias.pdf

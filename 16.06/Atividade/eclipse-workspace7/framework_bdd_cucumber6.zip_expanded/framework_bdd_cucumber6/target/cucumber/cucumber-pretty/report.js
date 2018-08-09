$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CadastroContaMercadoLivre.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# Author: Willian Passos"
    },
    {
      "line": 3,
      "value": "# encoding UTF-8"
    }
  ],
  "line": 5,
  "name": "Enviar Email",
  "description": "A fim de enviar um email , irei logar com minha conta google",
  "id": "enviar-email",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 1099356,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Enviar um email com minha conta google",
  "description": "",
  "id": "enviar-email;enviar-um-email-com-minha-conta-google",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que eu acesse a página de login do gmail",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo meu endereço de email",
  "rows": [
    {
      "cells": [
        "Email",
        "wpassos@svlabs.com.br"
      ],
      "line": 11
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "prossigo para tela seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar senha",
  "rows": [
    {
      "cells": [
        "Senha",
        "estagiario@2018"
      ],
      "line": 14
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "pressigo para proxima tela",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "escolho a opção de serviço",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "vou para opção escrever novo emial",
  "rows": [
    {
      "cells": [
        "Endereco",
        "wpassos@svlabs.com.br"
      ],
      "line": 18
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "envio o emial",
  "keyword": "Então "
});
formatter.match({
  "location": "EviaEmailTeste.que_eu_acesse_a_página_de_login_do_gmail()"
});
formatter.result({
  "duration": 5019728325,
  "status": "passed"
});
formatter.match({
  "location": "EviaEmailTeste.informo_meu_endereço_de_email(DataTable)"
});
formatter.result({
  "duration": 522194931,
  "status": "passed"
});
formatter.match({
  "location": "EviaEmailTeste.prossigo_para_tela_seguinte()"
});
formatter.result({
  "duration": 689090152,
  "status": "passed"
});
formatter.match({
  "location": "EviaEmailTeste.informar_senha(DataTable)"
});
formatter.result({
  "duration": 597359193,
  "status": "passed"
});
formatter.match({
  "location": "EviaEmailTeste.pressigo_para_proxima_tela()"
});
formatter.result({
  "duration": 422814367,
  "status": "passed"
});
formatter.match({
  "location": "EviaEmailTeste.escolho_a_opção_de_serviço()"
});
formatter.result({
  "duration": 11110832633,
  "status": "passed"
});
formatter.match({
  "location": "EviaEmailTeste.vou_para_opção_escrever_novo_emial(DataTable)"
});
formatter.result({
  "duration": 906618197,
  "status": "passed"
});
formatter.match({
  "location": "EviaEmailTeste.envio_o_emial()"
});
formatter.result({
  "duration": 1128012096,
  "status": "passed"
});
});
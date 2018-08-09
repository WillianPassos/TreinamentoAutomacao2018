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
  "name": "Cadastro no Mercado Livre",
  "description": "A fim de utilizar os serviços do Mercado Livre, eu realizo o cadastro de um novo usuário",
  "id": "cadastro-no-mercado-livre",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 1229078,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Realizar início de cadastro com sucesso",
  "description": "",
  "id": "cadastro-no-mercado-livre;realizar-início-de-cadastro-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que eu acesse a página de cadastro do Mercado Livre",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "preencho os dados para criar um usuário novo",
  "rows": [
    {
      "cells": [
        "Nome",
        "Willian"
      ],
      "line": 11
    },
    {
      "cells": [
        "Sobrenome",
        "Passos"
      ],
      "line": 12
    },
    {
      "cells": [
        "Email",
        "willianpassosteste@gmail.com"
      ],
      "line": 13
    },
    {
      "cells": [
        "Senha",
        "Teste@1234"
      ],
      "line": 14
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "prossigo para tela seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "entrar na conta",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroContaMercadoLivre.que_eu_acesse_a_página_de_cadastro_do_Mercado_Livre()"
});
formatter.result({
  "duration": 23951331244,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.preencho_os_dados_para_criar_um_usuário_novo(DataTable)"
});
formatter.result({
  "duration": 1088358912,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.prossigo_para_tela_seguinte()"
});
formatter.result({
  "duration": 1320745761,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.é_apresentada_tela_inicial_do_Mercado_Livre()"
});
formatter.result({
  "duration": 128205588,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Teste@1234]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.com.framework.test.CadastroContaMercadoLivre.é_apresentada_tela_inicial_do_Mercado_Livre(CadastroContaMercadoLivre.java:58)\r\n\tat ✽.Então entrar na conta(CadastroContaMercadoLivre.feature:16)\r\n",
  "status": "failed"
});
});
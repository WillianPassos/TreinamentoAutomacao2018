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
  "duration": 894094,
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
  "name": "conta criada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroContaMercadoLivre.que_eu_acesse_a_página_de_cadastro_do_Mercado_Livre()"
});
formatter.result({
  "duration": 7816721609,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.preencho_os_dados_para_criar_um_usuário_novo(DataTable)"
});
formatter.result({
  "duration": 1124876730,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.prossigo_para_tela_seguinte()"
});
formatter.result({
  "duration": 636268580,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.é_apresentada_tela_inicial_do_Mercado_Livre()"
});
formatter.result({
  "duration": 1118218417,
  "status": "passed"
});
formatter.before({
  "duration": 44674,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Tentar cadastrar um usuário ja cadastrado",
  "description": "",
  "id": "cadastro-no-mercado-livre;tentar-cadastrar-um-usuário-ja-cadastrado",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 20,
  "name": "que eu acesse a página de cadastro do Mercado Livre",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "preencho os dados para criar um usuário novo",
  "rows": [
    {
      "cells": [
        "Nome",
        "Willian"
      ],
      "line": 22
    },
    {
      "cells": [
        "Sobrenome",
        "Passos"
      ],
      "line": 23
    },
    {
      "cells": [
        "Email",
        "willianpassosteste@gmail.com"
      ],
      "line": 24
    },
    {
      "cells": [
        "Senha",
        "Teste@1234"
      ],
      "line": 25
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "prossigo para tela seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "confirmo que ja tenho um cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "insiro minha senha novamente para entrar na conta exixtente",
  "rows": [
    {
      "cells": [
        "Senha",
        "Teste@1234"
      ],
      "line": 29
    }
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroContaMercadoLivre.que_eu_acesse_a_página_de_cadastro_do_Mercado_Livre()"
});
formatter.result({
  "duration": 6212271847,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.preencho_os_dados_para_criar_um_usuário_novo(DataTable)"
});
formatter.result({
  "duration": 788309526,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.prossigo_para_tela_seguinte()"
});
formatter.result({
  "duration": 626893875,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.confirmo_que_ja_tenho_um_cadastro()"
});
formatter.result({
  "duration": 2577278906,
  "status": "passed"
});
formatter.match({
  "location": "CadastroContaMercadoLivre.insiro_minha_senha_novamente_para_entrar_na_conta_exixtente(DataTable)"
});
formatter.result({
  "duration": 3905391157,
  "status": "passed"
});
});
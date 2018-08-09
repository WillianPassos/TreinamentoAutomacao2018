# language: pt
# Author: Willian Passos
# encoding UTF-8

Funcionalidade: Cadastro no Mercado Livre
	A fim de utilizar os serviços do Mercado Livre, eu realizo o cadastro de um novo usuário

Cenário: Realizar início de cadastro com sucesso
    Dado que eu acesse a página de cadastro do Mercado Livre
    Quando preencho os dados para criar um usuário novo
      |  Nome       | Willian                       |
      |  Sobrenome  | Passos                        |
      |  Email      | willianpassosteste@gmail.com  |
      |  Senha      | Teste@1234                    |
      E prossigo para tela seguinte
    Então entrar na conta

# language: pt
# Author: Willian Passos
# encoding UTF-8

Funcionalidade: Enviar Email
	A fim de enviar um email , irei logar com minha conta google

Cenário: Enviar um email com minha conta google
    Dado que eu acesse a página de login do gmail
    Quando informo meu endereço de email
      |  Email      | wpassos@svlabs.com.br       |
      E prossigo para tela seguinte
    Quando informar senha
      |  Senha      | estagiario@2018             |
      E pressigo para proxima tela
    Quando escolho a opção de serviço
      E vou para opção escrever novo emial
      |  Endereco   | wpassos@svlabs.com.br       |
    Então envio o emial  
    

    
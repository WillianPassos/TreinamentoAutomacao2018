#language: pt

Funcionalidade: Login com sucesso no portal Rede Natura

@login
Cenario: Realizar o Login
Dado que eu esteja na página de login do usuário do site Rede Natura 
Quando informo os dados de login
| Email          | sazon@nickrizos.com    |
| CEP            | 06454000               |
| nome           | José Pessoa Feliz      |
| senha          | Teste@1234             |
Então consigo realizar o login no sistema
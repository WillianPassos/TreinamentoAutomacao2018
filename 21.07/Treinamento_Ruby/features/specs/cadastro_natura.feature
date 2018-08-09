#language: pt

Funcionalidade: Criar uma conta de usuário no Rede Natura

@cadastro
Cenario: Cadastro de usuário com sucesso

Dado que eu esteja na página de Identificação do usuário do site Rede Natura 
Quando informo os dados
| Email          | sazon@nickrizos.com    |
| CEP            | 06454000               |
| nomeCompleto   | José Pessoa Feliz      |
| senha          | Teste@1234             |
E concordo com os termos uso e política de privacidade
Então confirmo o cadastro

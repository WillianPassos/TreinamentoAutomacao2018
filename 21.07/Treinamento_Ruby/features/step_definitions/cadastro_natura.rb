# encoding: UTF-8

Dado("que eu esteja na página de Identificação do usuário do site Rede Natura") do
  visit(@url)
end

Quando("informo os dados") do |table|
  @cadastro = CadastroNaturaPage.new
  @email = table.rows_hash['Email']
  @cep = table.rows_hash['CEP']
  @nome = table.rows_hash['nomeCompleto']
  @senha = table.rows_hash['senha']

  @cadastro.realiza_cadastro(@email, @cep, @nome, @senha)
end

Quando("concordo com os termos uso e política de privacidade") do
  @cadastro.check_termo_uso.click

end

Então("confirmo o cadastro") do
  @cadastro.botao_continuar.click
end
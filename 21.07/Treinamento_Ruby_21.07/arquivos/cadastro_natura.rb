#enconding: utf-8

Dado("que eu esteja no site do Rede Natura para criar uma conta") do
    
    visit("https://s.rede.natura.net/identifique-se")

  end
  
  Quando("preencho todos os campos do formulario e confirmo o cadastro") do |table|
     @telacadastro = Cadastropage.new
     @Email = table.rows_hash['Email']
     @Cep = table.rows_hash['Cep']
     @Nome = table.rows_hash['Nome']
     @Senha = table.rows_hash['Senha']
     @telacadastro.cadastra_user(@Email, @Cep, @Nome, @Senha)
  end
  
  Então("eu sou direcionado para a home logada") do
    expect(page).to have_content 'OLÁ,'
  end
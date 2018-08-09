#encoding: utf-8

Dado("que eu esteja na página de login do usuário do site Rede Natura") do   
    visit(@url) 
end                                                                          
                                                                               
Quando("informo os dados de login") do |table|                               
    @cadastro_natura_page = CadastroLoginPage.new
    @email = table.rows_hash['Email']
    @cep = table.rows_hash['CEP']
    @nome = table.rows_hash['nome']
    @senha = table.rows_hash['senha']
    @cadastro_natura_page.realiza_login(@email, @senha)
end                                                                          
                                                                               
Então("consigo realizar o login no sistema") do                              
    expect(find(:xpath, '//*[@id="showUserHeaderBtn"]/div[2]/p').text)==('Olá, ' + @nome.upcase)
end                                                                          
#encoding: utf-8

Dado("que eu esteja no site do google para criar um e-mail") do                           
    visit('https://accounts.google.com/signup/v2/webcreateaccount?hl=pt-BR&flowName=GlifWebSignIn&flowEntry=SignUp')             
  end                                                                 
                                                                                            
Quando("preencho todos os campos do formulario e clico no botão próxima etapa") do |table|
    #@cadastro = CadastroPage.new
    @nome = table.rows_hash['Nome']
    @sobrenome = table.rows_hash['Sobrenome']
    @usuario = table.rows_hash['usuário']
    @senha = table.rows_hash['senha']
    @confirmar_senha = table.rows_hash['confirmarSenha']
    @dia_nascimento = table.rows_hash['diaNascimento']      
    
    find(:id, 'firstName').set(@nome)
    find(:id, 'lastName').set(@sobrenome)
    find(:id, 'username').set(@usuario)
    find(:xpath, '//input[@name="Passwd"]').set(@senha)
    find(:xpath, '//input[@name="ConfirmPasswd"]').set(@confirmar_senha)
    find(:xpath, '//span[@class="RveJvd snByac"]').click
end                                                            
                                                                                            
Então("eu vejo a próxima tela para Verifique seu número de telefone") do                  
    expect(page).to have_content 'Verifique seu número de telefone'             
end                                                          
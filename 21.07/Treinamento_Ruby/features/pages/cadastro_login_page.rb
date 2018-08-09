class CadastroLoginPage < SitePrism::Page
    element :campo_email, '#field-identification-email'
    element :radio_primeiracompra, :xpath, '//label[@class="custom-radio show-first-buy"]'
    element :campo_cep, '#cep'
    element :campo_nome, '#new-name'
    element :campo_senha, :xpath, '//input[@id="password"]'
    element :check_termo_uso, :xpath, '//label[@id="label-accept-terms"][1]'
    element :botao_continuar, :xpath, '//div[@class="button-group"]//a[@title="continuar"][contains(text(),"continuar")]'

    def realiza_login(email, senha)
        campo_email.set email
        campo_senha.set senha
        botao_continuar.click
    end
end
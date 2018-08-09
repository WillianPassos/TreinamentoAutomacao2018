
class CadastroNaturaPage < SitePrism::Page
    element :campo_email, '#field-identification-email'
    element :radio_primeiracompra, :xpath, '//label[@class="custom-radio show-first-buy"]'
    element :campo_cep, '#cep'
    element :campo_nome, '#new-name'
    element :campo_senha, "#new-password"
    element :check_termo_uso, :xpath, '//label[@id="label-accept-terms"][1]'
    element :botao_continuar, :xpath, '//div[@class="button-group"]//a[@title="continuar"][contains(text(),"continuar")]'

    def realiza_cadastro(email, cep, nome, senha)
        campo_email.set email
        radio_primeiracompra.click
        campo_cep.set cep
        campo_nome.set nome
        campo_senha.set senha
    end

    def extrai_primeironome(nome_completo)
        primeiro_nome = nome_completo.index(' ')
        primeiro_nome = nome_completo[0,(primeiro_nome)].upcase
        return primeiro_nome
    end

end
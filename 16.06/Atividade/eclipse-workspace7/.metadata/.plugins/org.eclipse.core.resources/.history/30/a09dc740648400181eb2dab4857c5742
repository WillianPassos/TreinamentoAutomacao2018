package br.com.framework.page;

import br.com.framework.core.BasePage;

public class CadastroContaMecadoLivrePage extends BasePage {

	public void setNome(String nome) {
		dsl.escreve("signupFirstName", nome);
	}
	
	public void setSobrenome(String sobrenome) {
		dsl.escreve("signupLastName", sobrenome);
	}
	
	public void setUserName(String email) {
		dsl.escreve("signupEmail", email);
	}
	
	public void setSenha(String senha) {
		dsl.escreve("signupPassword", senha);
	}
	
	public void CriarContar() {
		dsl.clicarPorXpath("//button[@type='submit']");
	}
	
	public void Entrar() {
		dsl.clicarPorXpath("//button[@class='ui-button ui-button--primary ui-button--ripple-effect recover-pass']");
	}
	
	public void setSenhaConfirmar(String senha) {
		dsl.escreve("password", senha);
	}
	
	public void ConfirmarContaEntrar() {
		dsl.clicarPorXpath("//button[@id='action-complete']");
	}
	
	public String obterResultadoNome() {
		return dsl.obterValorCampoPorId("signupFirstName");
	}
	
	public String obterResulatdoSobrenome() {
		return dsl.obterValorCampoPorId("signupLastName");
	}
	
	public String obterResultadoUserName() {
		return dsl.obterValorCampoPorId("signupEmail");
	}
	
	public String obterResultadoSenha() {
		return dsl.obterValorCampoPorId("signupPassword");
	}
	
	
}

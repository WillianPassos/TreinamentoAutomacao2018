package br.com.framework.test;

import java.util.Map;

import static br.com.framework.core.DriverFactory.getDriver;
import br.com.framework.core.BaseTest;
import br.com.framework.core.DriverFactory;
import br.com.framework.page.EnviaEmail;
import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Então;

public class EviaEmailTeste extends BaseTest {

	private EnviaEmail page;
	
	@Before
	public void inicializa() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");
		page = new EnviaEmail();
		BaseTest.testName = "Cadastro no Mercado Livre";
	}
	
	@Dado("^que eu acesse a página de login do gmail$")
	public void que_eu_acesse_a_página_de_login_do_gmail() throws Throwable {
		getDriver().get("https://accounts.google.com/signin/v2/identifier?service=orkut&hl=pt-BR&rm&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
		BaseTest.takeScreenshot();
	}

	@Quando("^informo meu endereço de email$")
	public void informo_meu_endereço_de_email(DataTable arg1) throws Throwable {
		Map<String, String> list = arg1.asMap(String.class, String.class);
		page.setUserName(list.get("Email"));
		BaseTest.takeScreenshot();
	}
	
	@Quando("^prossigo para tela seguinte$")
	public void prossigo_para_tela_seguinte() throws Throwable {
		page.Proximo();
		BaseTest.takeScreenshot();
	}

	@Quando("^informar senha$")
	public void informar_senha(DataTable arg2) throws Throwable {
		Map<String, String> list = arg2.asMap(String.class, String.class);
		page.setSenha(list.get("Senha"));
		BaseTest.takeScreenshot();
	}
	
	@Quando("^pressigo para proxima tela$")
	public void pressigo_para_proxima_tela() throws Throwable {
		page.Confirmar();
		BaseTest.takeScreenshot();
	}
	

	@Quando("^escolho a opção de serviço$")
	public void escolho_a_opção_de_serviço() throws Throwable {
		page.EscolherServiço();
		BaseTest.takeScreenshot();
	}
	
	@Quando("^vou para opção escrever novo emial$")
	public void vou_para_opção_escrever_novo_emial(DataTable arg3) throws Throwable{
		Map<String, String> list = arg3.asMap(String.class, String.class);
		page.NovoEmail();
		page.setEnderecoEmail(list.get("Endereco"));
		BaseTest.takeScreenshot();
	}
	
	@Então("^envio o emial$")
	public void envio_o_emial() throws Throwable {
		page.Enviar();
		BaseTest.takeScreenshot();
		DriverFactory.killDriver();
	}
	
}
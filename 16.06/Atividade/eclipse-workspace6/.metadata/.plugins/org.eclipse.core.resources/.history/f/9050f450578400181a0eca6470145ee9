package br.com.framework.test;

import java.util.Map;

import static br.com.framework.core.DriverFactory.getDriver;
import br.com.framework.core.BaseTest;
import br.com.framework.core.DriverFactory;
import br.com.framework.page.CadastroContaMecadoLivrePage;
import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Então;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CadastroContaMercadoLivre extends BaseTest {

	private CadastroContaMecadoLivrePage page;
	
	@Before
	public void inicializa() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");
		page = new CadastroContaMecadoLivrePage();
		BaseTest.testName = "Cadastro no Mercado Livre";
	}
	
	@Dado("^que eu acesse a página de cadastro do Mercado Livre$")
	public void que_eu_acesse_a_página_de_cadastro_do_Mercado_Livre() throws Throwable {
		getDriver().get("https://www.mercadolivre.com.br/registration");
		BaseTest.takeScreenshot();
	}

	@Quando("^preencho os dados para criar um usuário novo$")
	public void preencho_os_dados_para_criar_um_usuário_novo(DataTable arg1) throws Throwable {
		Map<String, String> list = arg1.asMap(String.class, String.class);
		page.setNome(list.get("Nome"));
		page.setSobrenome(list.get("Sobrenome"));
		page.setUserName(list.get("Email"));
		page.setSenha(list.get("Senha"));
		BaseTest.takeScreenshot();
	}

	@Quando("^prossigo para tela seguinte$")
	public void prossigo_para_tela_seguinte() throws Throwable {
		WebDriverWait wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//button[@type='submit']")));
		page.CriarContar();
	}

	@Então("^entrar na conta$")
	public void é_apresentada_tela_inicial_do_Mercado_Livre() throws Throwable {
		Assert.assertEquals("Willian", page.obterResultadoNome());
		Assert.assertEquals("Passos", page.obterResulatdoSobrenome());
		Assert.assertEquals("willianpassosteste@gmail.com", page.obterResultadoUserName());
		Assert.assertEquals("Teste@1234", page.obterResultadoSenha());
		page.Entrar();
		BaseTest.takeScreenshot();
		DriverFactory.killDriver();
	}

	
}

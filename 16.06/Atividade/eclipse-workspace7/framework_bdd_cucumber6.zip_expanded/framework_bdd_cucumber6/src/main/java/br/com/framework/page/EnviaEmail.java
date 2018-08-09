package br.com.framework.page;

import br.com.framework.core.BasePage;

public class EnviaEmail extends BasePage {

	public void setUserName(String email) {
		dsl.escreve("identifierId", email);
	}
	
	public void Proximo() {
		dsl.clicarPorXpath("//span[contains(text(),'Próxima')]");
	}
	
	public void setSenha(String senha) {
		dsl.escreve1("password", senha);
	}
	
	public void Confirmar() {
		dsl.clicarPorXpath("//div[@id='passwordNext']//content[@class='CwaK9']");
	}
	
	public void EscolherServiço() {
		dsl.clicarPorXpath("//a[@class='WaidBe']");
	}
	
	public void NovoEmail() {
		dsl.clicarPorXpath("//div[@class='T-I J-J5-Ji T-I-KE L3']");
	}
	
	public void setEnderecoEmail(String endereco) {
		dsl.escreve1("to", endereco);
	}
	
	public void Enviar() {
		dsl.clicarPorCss("body.aAU:nth-child(2) div.dw:nth-child(26) div.nH div.nH div.no div.nH.nn:nth-child(3) div.no div.nH.nn:nth-child(1) div.AD div.nH div.nH.Hd div.nH:nth-child(3) div.aaZ div.M9 div.aoI:nth-child(4) table.aoP.aoC:nth-child(2) td.I5 table.iN:nth-child(4) td.HE div.aDg div.aDj div.aDh table.IZ tbody:nth-child(2) tr.btC td.gU.Up:nth-child(1) div.J-J5-Ji.btA > div.T-I.J-J5-Ji.aoO.T-I-atl.L3:nth-child(2)");
	}
}

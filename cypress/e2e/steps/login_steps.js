
/// <reference types="Cypress"/>

import LoginPage from "../pages/login_page";

const loginPage = new LoginPage

Given(/^eu acesse a página home da aplicação$/, () => {
    loginPage.accessHomePage()
});

When(/^inserir meu email "([^"]*)" e a senha "([^"]*)"$/, (email, password) => {
    loginPage.accessLoginPage()
    loginPage.fillLoginInfo(email, password)
});

When(/^clicar no botão entrar$/, () => {
    loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
    console.log(mensagem);

});

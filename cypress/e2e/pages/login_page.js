/// <reference types="Cypress"/>
import HomeElements from "../elements/home_elements"
import HomeElements from "../elements/home_elements"
import LoginElements from "../elements/login_elements"
import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements
const homeElements = new HomeElements

const url = Cypress.config('baseUrl')

class LoginPage {

    accessHomePage() {
        cy.visit(url)
        cy.wait(5000)
        cy.get(homeElements.btnHideCookie()).click()
    }

    accessLoginPage() {
        cy.contains(homeElements.acountSelector()).click()
        cy.contains(homeElements.btnLogin()).click()
    }

    fillLoginInfo(email, password) {
        cy.get(loginElements.inputEmail).type(email)
        cy.get(loginElements.inputPass).type(password)
    }
    submitLogin() {
        cy.get(loginElements.loginSubmit()).click()
    }



} export default LoginPage
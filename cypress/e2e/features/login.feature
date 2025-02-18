Feature: Login
Funcionalidade para ralizar variados logins no sistema PHPTravels

  Scenario Outline: "<cenario>"
    Given eu acesse a página home da aplicação
    When inserir meu email "<email>" e a senha "<senha>"
    And clicar no botão entrar
    Then tenho meu acesso "<mensagem>"

    Examples:
      | cenario           | email               | senha    | mensagem                 |
      | Login com sucesso | user@phptravels.com | demouser | com sucesso na aplicação |

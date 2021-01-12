Cypress.Commands.add("login_command",(email, password) =>{
    cy.get("a[href='/login']").click()
    cy.get("input[name='email']").type('nino.qakurs@gmail.com')
    cy.get("input[name='password']").type('Qakurs123')
    cy.get("button[type='submit']").click()
})
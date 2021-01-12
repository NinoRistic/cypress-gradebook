/// <reference types="Cypress"/>
const locator= require('../fixtures/locator.json')
describe("login", () => {
    beforeEach("visit app" , () =>{
        cy.visit("/")
    })
    it("login with valid credentials", () =>{
        cy.get(locator.header.login).should("be.visible").click()
        cy.url().should("contains","/login")
        cy.get(locator.login.email).should("be.visible").type("nino.qakurs@gmail.com")
        cy.get(locator.login.password).should("be.visible").type("Qakurs123")
        cy.get(locator.login.login_button).should("be.visible").click()
        cy.url().should("contains","/")
        cy.get(locator.header.logout).should("be.visible")
    })
    
    it("login with invalid credentials", () =>{
        cy.get(locator.header.login).should("be.visible").click()
        cy.url().should("contains","/login")
        cy.get(locator.login.email).should("be.visible").type("nino.qakurs789@gmail.com")
        cy.get(locator.login.password).should("be.visible").type("Qakurs123456789")
        cy.get(locator.login.login_button).should("be.visible").click()
        cy.url().should("contains", "/login")
    })
})

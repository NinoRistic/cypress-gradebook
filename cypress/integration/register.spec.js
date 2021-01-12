/// <reference types="Cypress"/>
const locator= require('../fixtures/locator.json')
const faker = require('faker')

let data = {
    random_first_name: faker.name.firstName(),
    random_last_name: faker.name.lastName(),
    random_password: faker.internet.password() + "1",
    random_email: faker.internet.email()
}

describe("register", () =>{
    beforeEach("visit register page", () =>{
        cy.visit("/")
        cy.get(locator.header.register).should("be.visible").click()
        cy.url().should("contains", "/register")
    })

    it("register with valid data",() =>{
        cy.get(locator.register.frist_name).should("be.visible").type(data.random_first_name)
        cy.get(locator.register.last_name).should("be.visible").type(data.random_last_name)
        cy.get(locator.register.password).should("be.visible").type(data.random_password)
        cy.get(locator.register.confirmPassword).should("be.visible").type(data.random_password)
        cy.get(locator.register.email).should("be.visible").type(data.random_email)
        cy.get(locator.register.checkboxTerms).should("be.visible").check()
        cy.get(locator.register.buttonSubmit).should("be.visible").click()
        cy.url().should("contains", "/gradebooks")
        cy.get(locator.header.logout).should("be.visible")
    })
})
/// <reference types="Cypress"/>
const locator= require('../fixtures/locator.json')
const faker = require('faker')


let data = {
    randome_title: faker.name.title(),
    email:"nino.qakurs@gmail.com",
    password:"Qakurs123"
}

describe("new gradebook", () => {
    before("login", () =>{
        cy.visit("/")
        cy.login_command(data.email,data.password)
    })

    it("create new gradebook", () => {
        cy.get(locator.header.create_new_gradebook).should("be.visible").click()
        cy.get(locator.create_new_gradebook.title).should("be.visible").type(data.randome_title)
        cy.get(locator.create_new_gradebook.professor).should("be.visible").select("83")
        cy.get(locator.create_new_gradebook.buttonSubmit).should("be.visible").click()
        cy.url().should("contains", "/")
    })
})
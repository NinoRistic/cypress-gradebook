/// <reference types="Cypress"/>
const locator= require('../fixtures/locator.json')
const faker = require('faker')

let data = {
    email:"nino.qakurs@gmail.com",
    password:"Qakurs123",
    randome_first_name:faker.name.firstName(),
    randome_last_name:faker.name.lastName(),
    randome_image:faker.image.avatar()
}

describe("create new professor",() => {

    before("login", () =>{
        cy.visit("/")
        cy.login_command(data.email, data.password)
    })

    it("create professor", () =>{
        cy.get(locator.header.professors.dropdown).should("be.visible").click()
        cy.get(locator.header.professors.create_professor).should("be.visible").click()
        cy.url().should("contains","/create-professor")
        cy.get(locator.create_new_professor.firstName).should("be.visible").type(data.randome_first_name)
        cy.get(locator.create_new_professor.lastName).should("be.visible").type(data.randome_last_name)
        cy.get(locator.create_new_professor.addImageButton).should("be.visible").click()
        cy.get(locator.create_new_professor.addImageInput).should("be.visible").type(data.randome_image)
        cy.get(locator.create_new_professor.buttonSubmit).should("be.visible").click()
        cy.url().should("contains", "/all-professors")
    })
})
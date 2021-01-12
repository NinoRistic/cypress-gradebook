/// <reference types="Cypress"/>
const locator= require('../fixtures/locator.json')

let data ={
    email:"nino.qakurs@gmail.com",
    password:"Qakurs123"
}

describe("logout",() =>{
    before("login",() =>{
        cy.visit("/")
        cy.login_command(data.email,data.password)
    })

    it("logout test", () =>{
        cy.get(locator.header.logout).should("be.visible").click()
        cy.url().should("contains", "/login")
        cy.get(locator.header.login).should("be.visible")
    })
})
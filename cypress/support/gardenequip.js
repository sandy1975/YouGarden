Cypress.Commands.add("youGardenSignIn", () => {
    cy.visit('https://www.yougarden.com')
    cy.get('.topButton').contains('Login').click({ force: true })
    cy.get('input[id="AccountEmail"]').type('yvsand81@yahoo.com')
    cy.get('input[id="AccountPassword"]').type('Bdanjo12')
    cy.get('.accUpdateButton').contains('Sign in').click()
    cy.get('.accLeftWrapper').children().contains('Continue Shopping').click()
})
Cypress.Commands.add("gardenessentials", () => {
    cy.get('.menu').children().contains('Gardening Essentials').click({ force: true })
    cy.get('.title').contains('Garden Equipment').click()
    cy.get('a[href="/cat-geq/garden-equipment.htm"]').children().contains('Browse All').click()
})
Cypress.Commands.add("addtobasket", () => {
    cy.get('#formST0010994 ').find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
    cy.continueShopping()
    cy.get('#formST0010993 ').find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
    cy.continueShopping()
})
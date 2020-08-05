Cypress.Commands.add("youGardenSignIn", () => {
    cy.visit('https://www.yougarden.com')
    cy.get('.topButton').contains('Login').click({ force: true })
    cy.get('input[id="AccountEmail"]').type('prash.dba@gmail.com')
    cy.get('input[id="AccountPassword"]').type('Swaroopa@123')
    cy.get('.accUpdateButton').contains('Sign in').click()
    cy.get('.accLeftWrapper').children().contains('Continue Shopping').click()
})

Cypress.Commands.add("youGardenLogOut", () => {
    cy.get('.accLogoutButton').contains('Log Out').should('be.visible').click()
})

Cypress.Commands.add("browseLillies", () => {
    cy.get('.menu').children().contains('Bulbs').click({ force: true })
    cy.get('.title').contains('Summer Flowering Bulbs').click()
    cy.get('a[href="/cat-lil/lilies.htm"').children().contains('Browse All').click()
})

Cypress.Commands.add("continueShopping",()=>{

    cy.get('.basketButtonsWrapper').children().contains('Continue Shopping').click()
})

Cypress.Commands.add("viewBasket",()=>{
    cy.get('.basketButtonsWrapper').children().contains('VIEW BASKET').click()
    // cy.get('svg[data-icon="shopping-basket"]',{ timeout: 10000 }).click()
})

Cypress.Commands.add("verifyLilliesBasket",()=>{
cy.get('.desc').should('contain','\'Fragrant Hybrid Lily Albufeira ')
       // cy.get('.desc').should('contain','Mixed Fragrant Oriental Lilies')
        //cy.get('.desc').should('contain', 'Lily Saver Bundle')
    })     

    Cypress.Commands.add("addLiilliesToBasket",()=>{

    cy.get('#formST0010084').find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
        cy.continueShopping()
        
       // cy.get('#formST0006248').find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
        // cy.continueShopping()
        
        //cy.get('#formST0006249').find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
        
    }) 

    Cypress.Commands.add("mobileBasketView",()=>{
       cy.get('.mobileBasket').click()

    })
       Cypress.Commands.add("changeDeliveryAddress",()=>{
         cy.get('.checkoutButton').contains('Continue To Secure Checkout').click({force: true})
         cy.get('#deliveryFlagButton').click()
         cy.get('#postCodeDel').type('l19 2HW')
         cy.get('#DeliveryFinderWrapper > div > div:nth-child(2) > input:nth-child(2)').click()
         cy.get('#paf_deladdressoptions').select('25 Teignmouth Close, Liverpool')
         cy.get('.billingAddressBar > input').click()
         cy.get('#DeliveryAddressText').then((theElement) => {
           expect(theElement.text()).to.equal('25 Teignmouth Close, Liverpool, ,  L19 2HW');
          });
    })

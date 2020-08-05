import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^I sign in to yougarden$/, () => {
    cy.youGardenSignIn()
  });
  
  When(/^I add the Lillies$/, (datatable) => { 
    cy.browseLillies()
    datatable.hashes().forEach(lillyList => {
      cy.get(lillyList.lilly).find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
      cy.viewBasket()
    })
    
  })

  When(/^I add the Lillies$/, () => { 
    cy.browseLillies()
    
    cy.get('#formST0010084').find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
    cy.get('#formST0006250').find('div').should('have.class', 'mainButton buy').contains('ADD TO BASKET').click()
   
    
    
  })
  
  Then(/^basket should have Lillies$/, (datatable) => {
    datatable.hashes().forEach(element => {
      cy.get('.desc').should('contain',element.name)
      

    })

    Then(/^i change delivery address$/ , () => {
     cy.changeDeliveryAddress()
  })


});
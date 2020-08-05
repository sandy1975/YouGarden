import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^I sign in to yougarden site$/, () => {
  cy.youGardenSignIn()
})

When(/^I add the gardenequip$/, () => {
  cy.gardenessentials()
})
When(/^I add the addtobasket$/, () => {
  cy.addtobasket()

})

// Then(/^basket should have gardenequip$/, () => {

// })


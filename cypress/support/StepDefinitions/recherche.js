



import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
Given("navigate to foncia", () => {
  //  cy.fixture('DataTest').then(function(data){
    
    cy.visit(Cypress.config('url'))
    //verification
    cy.title().should('eq', 'Foncia : Agence immobilière,Vente, Location, Syndic, Gestion locative')

    

    }
    );
When("Search apprtement", () => {
    cy.fixture('DataTest').then(function(data){
    cy.log(data.amount,data.location);
    cy.get('[for="search-tab"]').click()
    cy.get('#price').type(data.amount)
    cy.get('[role="searchbox"]').first().type(data.location)
    cy.wait(3000)
    cy.get('[role="listbox"]> [role="option"]').first().click()
    cy.get('.button > :nth-child(2) > .p-button').click()
    })
})

Then("verification of search page for apprtement in {string}",(location)=>{
    cy.get('.search-results-container > :nth-child(2) > .search-results-header-title').contains("ACHAT IMMOBILIER "+location)
})
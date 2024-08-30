// reference - cypress autocomplete
/// <reference types="Cypress" />

// describe = suite name
// it = test name
describe('template spec', () => {
  it.skip('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('li').should('have.length', 6)
  });
});

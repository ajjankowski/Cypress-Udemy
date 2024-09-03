/// <reference types="Cypress" />

describe('tasks page', () => {
    it('should render the main image', () => {
        cy.visit('http://localhost:5173/');
        cy.get('img'); // it finds all elements by img
        cy.get('.main-header img'); // class -> tag
        cy.get('.main-header').find('img'); // same as above, searches for all img in .main-header
    });

    it('should display the page title', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('React Tasks');
        cy.get('h1').contains('React Tasks'); // always better to narrow contains by pre-tags
        cy.get('h1').should('have.length', 1) // should = expectation
    })
});

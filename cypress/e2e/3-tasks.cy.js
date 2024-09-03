/// <reference types="Cypress" />

describe('tasks management', () => {
    it('should open and close the new task modal', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('Add Task').click();
        cy.get('.backdrop').click({force: true}); // it will click element even if it's hidden by another element
        cy.get('.backdrop').should('not.exist'); // it's covered, so it doesn't exist
        cy.get('.modal').should('not.exist');

        cy.contains('Add Task').click();
        cy.contains('Cancel').click();
        cy.get('.backdrop').should('not.exist'); 
        cy.get('.modal').should('not.exist');
    });

    it('should  create a new task', () => {
        cy.visit('http://localhost:5173/');
    });
})
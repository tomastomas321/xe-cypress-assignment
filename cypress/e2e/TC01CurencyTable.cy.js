describe('Currency Table Verification', () => {
afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`FAILED-${this.currentTest.title}`); // Takes screenshot if there is failure
    }
  });

  it('should load and display currency rates table', () => {

    cy.visit('https://www.xe.com/currencytables/');

    cy.get('table') // Verifies that table visible
      .should('be.visible');

    cy.get('table tbody tr') // Gets table and rows
      .should('have.length.greaterThan', 10); // Should be visible at least 10 rows

  });

});
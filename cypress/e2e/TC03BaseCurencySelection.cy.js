describe('Base Currency Selection', () => {

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`FAILED-${this.currentTest.title}`); // Takes screenshot if there is failure
    }
  });

  it('should allow selecting EUR as base currency', () => {

    cy.visit('https://www.xe.com/currencytables/');

    cy.get('[role="combobox"]') // Types EUR in Currency TextBox
      .type('EUR');

    cy.contains('[role="option"]', 'EUR') // Picks EUR value
      .click();

    cy.contains('button', 'Confirm') // Clicks on Confirm button
      .click();

    cy.url()
      .should('include', 'from=EUR'); // Verifies if Value in url is Correct

    
  });

});
describe('Historical Date Selection', () => {

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`FAILED-${this.currentTest.title}`); // Takes screenshot if there is failure
    }
  });

  it('should allow selecting a historical date', () => {

    cy.visit('https://www.xe.com/currencytables/');

    cy.get('button[aria-haspopup="dialog"]') // Opens DatePicker
      .click();

    cy.get('[aria-label="Choose the Year"]') // Selects Year
      .select('2010');

    cy.get('[aria-label="Choose the Month"]') // Selects Month
      .select('January');

    cy.contains('button', /^31$/) //Finds only 31
      .should('be.visible')
      .click();

    cy.contains('button', 'Confirm') // Clicks on Confirm
      .click();

    cy.url()
      .should('include', 'date=2010-01-31'); // Verifies that date is correct

  });

});
describe('Known USD and GBP value verification', () => {
afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`FAILED-${this.currentTest.title}`); // Takes screenshot if there is failure
    }
  });

  it('should display correct EUR to USD and GBP rate for 2023-02-01', () => {

cy.visit('https://www.xe.com/currencytables/'); // visits xe.com
    
cy.get('button[aria-haspopup="dialog"]') // Clicks on Date
  .click(); 
    
cy.get('[aria-label="Choose the Year"]').select('2023'); // Selects Year

cy.get('[aria-label="Choose the Month"]') // Selects month
  .select('February');
   
cy.contains('button', /^1$/) // Click button only with '1'
  .should('be.visible')
  .click();
  
cy.get('[role="combobox"]').type('EUR'); // Types in Eur and clicks on it
cy.contains('[role="option"]', 'EUR')
  .click();

cy.contains('button', 'Confirm') // Clicks on Confirm button
  .click();

cy.contains('tr', 'USD') // Finds table row with usd
  .should('contain.text', '1.0918121631244302'); // Verifies if value is correct

cy.contains('tr', 'GBP') // Finds table row with gpb
  .should('contain.text', '0.8871386636267415'); // Verifies if value is correct
});

});
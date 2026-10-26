Objective:
This test suite covers highest-risk parts: 
1.	Widget availability
2.	Date selection
3.	Currency selection
4.	Historical rate accuracy

Technology:
Cypress; JavaScript

Project Structure:
Cypress/e2e/TC01CurencyTable.cy.js
Cypress/e2e/TC02HistoricalDateSelection.cy.js
Cypress/e2e/TC03BaseCurencySelection.cy.js
Cypress/e2e/TC04EurToUsdGpb.cy.js
Cypress/screenshots

Installation:
Install dependencies:  npm install
Install Cypress: npm install cypress --save-dev

Run Tests:
Open Cypress UI: npx cypress open
Run all tests: npx cypress run
Run a single test: npx cypress run --spec cypress/e2e/ TC04EurToUsdGpb.cy.js

Scope:
Widget Availability – Service Unavailable (Smoke test)
Date selection – Historical lookup is broken (Historical date functionality)
Currency selection – User Workflow is broken (Currency selection functionality )
Known Rates - Updates might introduce incorrect calculations (Business Requirement)


Test Cases:
TC01 - Currency table verification
Covers: Widget availability; Loading of data
Steps:
1.	Open Currency Tables
Expected Result: 
1.	Currency table is visible
2.	More than 10 currency rows are displayed

TC02 – Historical Date Selection 
Covers: Date lookup functionality
Steps:
1.	Open Currency Tables page
2.	Open date picker
3.	Select date: 2010-01-31
4.	Click on “Confirm” button
Expected Result: Date is 2010-01-31

TC03 – Base currency selection
Covers: Currency selection
Steps: 
1.	Open Currency Tables page
2.	In Currency text box type in “EUR”
3.	Select “EUR”
4.	Click “Confirm” button
Expected Result: URL contains “from=EUR”


TC03 - Known USD and GBP values verification
Covers: Business requirement
Steps:
1.	Open Currency Tables page.
2.	Select date 2023-02-01.
3.	Select base currency EUR.
4.	Confirm selection.
5.	Review displayed rates.

Expected Result:
1.	USD rate equals 1.0918121631244302
2.	GBP rate equals 0.8871386636267415
 
Bugs found during exploratory testing:

Non valid dates are visible
Steps:
1.	Go to: https://www.xe.com/currencytables/
2.	Open date picker 
3.	Select year 1926
4.	Try to select any day
Actual Result: Date is not selectable
Expected Result: Date should not be visible
Chrome version: 155.0.8059.86 (Official Build) (64-bit)
Firefox version: 155.0.1 (64-bit)
 
Link for button “Learn about our API” leads to empty page
Steps:
1.	Go to: https://www.xe.com/currencytables/
2.	Click on “Learn about our API” button
3.	Observe the page
Actual Result: User is redirected to empty page
Expected Result: Page is shown / error message is visible 
Chrome version: 155.0.8059.86 (Official Build) (64-bit)
Firefox version: 155.0.1 (64-bit)
 
 
Header is overlapped by date picker  
Preconditions: Browser is window mode
Steps:
1.	Go to: https://www.xe.com/currencytables/
2.	Open date picker
3.	Observe the page while scrolling up and down
Actual Result: Date picker is over buttons and header
Expected Result: nothing is hidden behind date picker 
Chrome version: 155.0.8059.86 (Official Build) (64-bit)
Firefox version: 155.0.1 (64-bit)
 


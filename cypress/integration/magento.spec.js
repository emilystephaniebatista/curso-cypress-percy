describe('Magento', () => {
  beforeEach(() => cy.visit('/'));

  it('Checks for the initial state', () => {
    cy.percySnapshot();
  });
});
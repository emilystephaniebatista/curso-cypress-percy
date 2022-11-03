describe('Magento', () => {
  beforeEach(() => cy.visit('/'));

  it('Checks for the initial state', () => {
    cy.percySnapshot();
  });

  it('Checks for invalid email', ()=>{
    cy.get('#email_address').type('teste##*');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    cy.percySnapshot();
  })
});
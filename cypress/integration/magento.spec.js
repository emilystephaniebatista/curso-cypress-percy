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
  it('Enable submission after all mandatory fields are filled', () => {
    cy.get('#firstname').type('Emily');
    cy.get('#lastname').type('Batista');
    cy.get('#email_address').type('teste1238@hotmail.com');
    cy.get('#password').type('teste1234@');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    cy.percySnapshot();
  });
});
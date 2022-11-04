describe('Magento', () => {
  beforeEach(() => cy.visit('/'));

  it('Checks for the initial state', () => {
    cy.percySnapshot();
  });

  it('Checks for invalid email', () => {
    cy.get('#email_address').type('teste##*');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    cy.percySnapshot();
  })
  it('Enable submission after all mandatory fields are filled', () => {
    cy.fillMandatoryFields();
    cy.percySnapshot();
  });

  //const sucessfulFormSubmission = 'Shows a sucess message after form submission';
  //cenários dinâmicos
  //it('sucessfulFormSubmission', () => {
  //cy.fillMandatoryFields();
  // cy.contains('Confirm Tickets').click();
  //cy.percySnapshot(
  //sucessfulFormSubmission,
  //{
  //  percyCSS: `.success span {display:none}`
  //}
  //);
  //});
});
describe('styled-components: InputText component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputtext--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InputText!');
    });
});

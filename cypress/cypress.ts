describe('settings page', () => {
beforeEach(() => {
  cy.visit('http://localhost:3000');
  cy.injectAxe();
});

// Basic usage
it('Has no detectable a11y violations on load', () => {
  // Test the page at initial load
  cy.checkA11y();
});

// Applying a context and run parameters
it('Has no detectable a11y violations on load (with custom parameters)', () => {
  // Test the page at initial load (with context and options)
  cy.checkA11y('.example-class', {
    runOnly: {
      type: 'tag',
      values: ['wcag2a'],
    },
  });
});
});

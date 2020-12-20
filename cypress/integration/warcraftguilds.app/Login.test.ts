/// <reference types="cypress" />

context("/login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Should render the login page", () => {
    cy.get("[data-cy=login-button]");
  });
});

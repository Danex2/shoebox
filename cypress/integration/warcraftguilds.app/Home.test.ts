/// <reference types="cypress" />

context("/", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should render the home page", () => {
    cy.get("[data-cy=search-text]");
  });
});

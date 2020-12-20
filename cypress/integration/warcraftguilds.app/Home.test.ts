/// <reference types="cypress" />

context("Testing the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should render the home page", () => {
    cy.get("[data-cy=search-text]");
  });
});

/// <reference types="cypress" />

context("/", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should render the home page", () => {
    cy.url().should("equal", "http://localhost:3000/");
  });
});

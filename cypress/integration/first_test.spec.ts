/// <reference types="cypress" />
context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("cy.title() - get the title", () => {
    cy.title().should("include", "React App");
    cy.contains("Login");
    cy.get("#username").type("test@test.com");
    cy.get("#password").type("1234");
    cy.get("#eye").click();
    cy.contains("Home").click();
    cy.contains("HomePage");
  });
  it("login button ", () => {
    cy.contains("Login");
    cy.get("#submit").click();
    cy.contains("HomePage");
  });
});

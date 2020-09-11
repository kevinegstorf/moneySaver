/// <reference types="cypress" />
context("Actions", () => {
  beforeEach(() => {
    cy.visit(
      "https://5f500ca578738c0007991226--trusting-heisenberg-d5b055.netlify.app/"
    );
  });
  it("cy.title() - get the title", () => {
    cy.title().should("include", "React App");
    cy.contains("Login");
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("1234");
    cy.get("#submit").click();
    cy.contains("Dashboard");
  });
  it("DashBoard Page", () => {
    cy.contains("Login");
    cy.get("#submit").click();
    cy.contains("Dashboard");
    cy.contains("Budget");
    cy.contains("Amount");
    cy.contains("Balance");
    cy.contains("Fixed Costs");
  });
});

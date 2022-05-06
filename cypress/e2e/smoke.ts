describe("smoke tests", () => {
  it("should load the index page", () => {
    cy.visit("/");
    cy.contains("component");
  });
});

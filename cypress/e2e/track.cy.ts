describe("Track order", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should not submit the form and throws the correct errors", () => {
    cy.get("button").click();
    cy.get("input:invalid").should("have.length", 2);

    cy.get("input[name=orderId]").type("123456789");
    cy.get("input:invalid").should("have.length", 1);

    cy.get("input[name=zipCode]").type("12345");
    cy.get("button").click();
    cy.get("input:invalid").should("have.length", 0);
    cy.get('div[role="alert"]').should("be.visible");
  });

  it("should submit the form and redirect to the track page", () => {
    cy.get("input[name=orderId]").type("1");
    cy.get("input[name=zipCode]").type("60156");
    cy.get("button").click();
    cy.get("input:invalid").should("have.length", 0);
    cy.get('div[role="alert"]').should("not.exist");
    cy.url().should("include", "/track?orderId=1&zipCode=60156");
  });
});

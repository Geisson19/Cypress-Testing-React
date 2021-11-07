describe("TODOS page", () => {
  it("should add a new TODO", () => {
    cy.visit("todo")
      .get("input")
      .type("new TODO")
      .get("button[type=submit]")
      .click()
      .get(".list-group > .list-group-item:first > p")
      .first()
      .should("contain", "1. new TODO");
  });

  it("should toogle a previous TODO", () => {
    cy.visit("/todo")
      .get("input")
      .type("new TODO")
      .get("button[type=submit]")
      .click()
      .get(".list-group > .list-group-item:first > p")
      .first()
      .click()
      .should("have.class", "complete");
  });

  it("should delete the previous TODO", () => {
    cy.visit("/todo")
      .get("input")
      .type("TODO Dummy")
      .get("button[type=submit]")
      .click()
      .get(".todo-container > h1")
      .first()
      .should("contain", "TodoApp ( 1 )")
      .get(".list-group > .list-group-item:first > button")
      .click()
      .get(".list-group > .list-group-item:first")
      .should("not.exist")
      .get(".todo-container > h1")
      .first()
      .should("contain", "TodoApp ( 0 )");
  });
});

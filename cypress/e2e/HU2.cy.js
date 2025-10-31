describe("spec de prueba de Buggy Cars Rating", () => {
  it("flujo desloggeado", () => {
    //Navegacion hasta un modelo
    cy.visit("/");
    cy.intercept("GET", "**/models*").as("getModels");
    cy.get('a[href="/overall"]').click();
    cy.wait("@getModels");
    cy.contains(
      'a[href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vlg"]',
      "View more"
    )
      .should("be.visible")
      .click();
    cy.wait(4000);

    //Acceptance 2 cumplido
    cy.get("button.btn.btn-success").contains("Vote").should("not.exist");
    cy.get('textarea[id="comment"]').should("not.exist");
    cy.get('p[class="card-text"]').should(
      "have.text",
      "You need to be logged in to vote."
    );

    //Acceptance 5 cumplido
    cy.contains("h4", "Specification")
      .should("be.visible")
      .closest(".card")
      .within(() => {
        cy.contains("Engine").should("exist");
        cy.contains("Max Speed").should("exist");
      });
    cy.get("h3").next().should("exist").and("be.visible");
    cy.contains("h4", "Votes:").should("be.visible");

    //Acceptance 4 cumplido
    cy.get("thead th")
      .should("contain.text", "Date")
      .and("contain.text", "Author")
      .and("contain.text", "Comment");

    cy.wait(2500);
  });

  it("flujo con usuario loggeado", () => {
    //Login
    cy.sessionLogin();

    //Navegacion hasta un modelo
    cy.visit("/");
    cy.intercept("GET", "**/models*").as("getModels");
    cy.get('a[href="/overall"]').click();
    cy.wait("@getModels");
    cy.contains(
      'a[href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vlg"]',
      "View more"
    )
      .should("be.visible")
      .click();
    cy.wait(4000);

    // Acceptance 1 Cumplido
    cy.get('label[for="comment"]')
      .should("be.visible")
      .and("have.text", "Your Comment (optional)");
    cy.get("textarea#comment").should("be.visible").and("be.enabled");
    cy.get("button.btn.btn-success")
      .should("be.visible")
      .and("contain", "Vote");

    //Acceptance 3 Cumplido
    cy.intercept("POST", "**/vote").as("postVote");

    cy.get("textarea#comment")
      .should("be.visible")
      .and("be.enabled")
      .type("prueba de test yuya");

    cy.get("button.btn.btn-success")
      .should("be.visible")
      .and("contain", "Vote")
      .click();

    cy.wait("@postVote").its("response.statusCode").should("eq", 200);
    cy.contains("table", "prueba de test yuya").should("be.visible");
  });
});

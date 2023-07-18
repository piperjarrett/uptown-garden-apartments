describe("nav bar spec", () => {
  beforeEach(() => {
    cy.visit("https://uptowngardensabq.com/#/");
  });
  it("should contain the logo", () => {
    cy.get(".nav-bar").should("exist");
    cy.get(".logo > .horizontal-logo")
      .should("have.attr", "src")
      .should("include", "/static/media/IMG_5558.53f79f7de119507c75f0.PNG");
    cy.get(".logo > .vertical-logo")
      .should("have.attr", "src")
      .should("include", "/static/media/logo.b52158607eb88b07f4c1.PNG");
  });
  it("should have a dropdown", () => {
    cy.get("label").click();
    cy.get(".menu > :nth-child(1)").contains("Complexes");
    cy.get(".menu > :nth-child(2)").contains("About The Location");
    cy.get(".menu > :nth-child(3)").contains("Contact Us");
  });
  it("should have a complex dropdown that links to each complex page", () => {
    cy.get("label").click();
    cy.get(".dropdown-content").invoke("show");
    cy.get('[href="#/complex/Pennsylvania"] > p').click();
    cy.url().should(
      "include",
      "https://uptowngardensabq.com/#/complex/Pennsylvania"
    );
    cy.visit("https://uptowngardensabq.com/#/");
    cy.get("label").click();
    cy.get(".dropdown-content").invoke("show");
    cy.get('[href="#/complex/Dallas"] > p').click();
    cy.url().should("include", "https://uptowngardensabq.com/#/complex/Dallas");
    cy.visit("https://uptowngardensabq.com/#/");
    cy.get("label").click();
    cy.get(".dropdown-content").invoke("show");
    cy.get('[href="#/complex/Marble"] > p').click();
    cy.url().should("include", "https://uptowngardensabq.com/#/complex/Marble");
  });
  it("should have a link to the About Location PAge", () => {
    cy.get("label").click();
    cy.get(".about-location-p")
      .contains("About The Location")
      .click()
      .url()
      .should("include", "https://uptowngardensabq.com/#/location");
  });
  it("should have a contact us dropdown that allows user to email and call", () => {
    cy.get("label").click();
    cy.get(".dropdown-content-contact").invoke("show");
    cy.get(".dropdown-content-contact > :nth-child(1) > img")
      .should("have.attr", "src")
      .should(
        "include",
        "/static/media/phone-svgrepo-com.053c6f7f2494eb01b926b000d5c11f95.svg"
      );
    cy.get(" .dropdown-content-contact > :nth-child(1) > a > p").contains(
      "(505)-948-8299"
    );
  });
});

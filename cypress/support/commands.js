Cypress.Commands.add(
  "clickElementIfTextMatches",
  (elementsArray, textToMatch) => {
    cy.wrap(elementsArray).each((element) => {
      cy.get(element)
        .invoke("text")
        .then((text) => {
          if (text === textToMatch) {
            cy.get(element).click();
          } else {
            throw new Error(
              `No element with text "${textToMatch}" found in the array.`
            );
          }
        });
    });
  }
);

Cypress.Commands.add(
  "clickRandomAndStoreText",
  { prevSubject: true },
  ($listItems, element) => {
    const randomIndex = Cypress._.random(0, $listItems.length - 1);
    const randomElement = $listItems.eq(randomIndex);
    const text = randomElement.text().trim();
    cy.get(element).eq(randomIndex).click();
    cy.wrap(text).as("storedText");
  }
);

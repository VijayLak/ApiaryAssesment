
const preparePage = (key) => {
    cy.intercept({
        method: `${key['METHOD']}`,
        url: `${key['URL']}`,
      }).as(`${key['ALIAS']}`);
}

const waitForPage = (key) => {
    cy.wait(500);
    cy.wait(`@${key['ALIAS']}`,{timeout:10000}).its('response.statusCode').should('equal', 200);
}

module.exports = {preparePage,waitForPage}
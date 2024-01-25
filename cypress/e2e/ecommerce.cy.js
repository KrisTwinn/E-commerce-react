/* eslint-disable no-undef */
/// <reference types="cypress"/>

beforeEach(()=>{
  cy.visit('http://localhost:3000');
})
describe('test globale di funzionamento', () => {
  it('la categoria smartphone esiste', () => {
    cy.findByTestId('smartphone').should('exist');
  })
  it('aggiungo un prodotto al carrello e verifico che il conto sia corretto, poi lo cancello', () => {
    cy.findByTestId('smartphone').should('exist');
    cy.findByTestId('smartphone').click();
    cy.url().should('contain', 'shop/smartphone');
    cy.findByTestId('prodotto-1').should('exist');
    cy.findByTestId('item-count').should('contain','0');
    cy.findByTestId('pulsante-1').click();
    cy.findByTestId('item-count').should('contain', '1');
    cy.visit('http://localhost:3000/checkout');
    cy.findByTestId('svuota').click();
    cy.findByTestId('item-count').should('contain', '0');
  })

  it('controllo il funzionamento del carrello da loggato', () => {
    cy.visit('http://localhost:3000/checkout');
    cy.get('input[name=email]').first().should('exist'.type('info2@test.it'));
    cy.get('input[name=password]').first().should('exist').type('123456');
    cy.findByTestId('login-button').should('exist').click();
    cy.findByTestId('smartphone').should('exist').click();
    cy.findByTestId('smartphone').click();
    cy.url().should('contain', 'shop/smartphone');
    cy.findByTestId('prodotto-1').should('exist');
    cy.findByTestId('item-count').should('contain','0');
    cy.findByTestId('pulsante-1').click();
    cy.findByTestId('item-count').should('contain', '1');
    cy.visit('http://localhost:3000/checkout');
    cy.findByTestId('svuota').click();
    cy.findByTestId('item-count').should('contain', '0');
    cy.findByTestId(/logout/i).click();
    cy.findByTestId(/logout/i).should('not.exist');
    cy.findByTestId(/logout/i).should('exist');
  })
})
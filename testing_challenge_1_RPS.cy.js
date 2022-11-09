//const cypress = require("cypress")
//const { it } = require("mocha")

describe('rps test', () => {
  it('tests connection', () => {
    cy.visit('http://127.0.0.1:5500/rps.html');
  })

  it('tests the rock button', () => {    
    cy.get('[data-cy="rock-btn"]').should("exist").should("have.text", "Rock"); //tests the button command is spelled correctly
    cy.get('[data-cy="rock-btn"]').click(); //clicks the button
    cy.get('[data-cy="user-choice"]').should("exist").should("have.text", "Rock"); //checks if choice is displayed correctly
    cy.get('[data-cy="computer-choice"]').should("exist"); //checks a computer choice is selected after the user's
    cy.get('[data-cy="computer-choice"]').then(($compChoice) => {
        if ($compChoice.text().includes('Rock')) {cy.get('[data-cy="result"]').should("exist").should("have.text", "It's a Tie!");}
        else if ($compChoice.text().includes('Scissors')) {cy.get('[data-cy="result"]').should("exist").should("have.text", "You Won!");}
        else {cy.get('[data-cy="result"]').should("exist").should("have.text", "You Lost!")}
    })
  })

  it('tests the paper button', () => {
    cy.get('[data-cy="paper-btn"]').should("exist").should("have.text", "Paper");
    cy.get('[data-cy="paper-btn"]').click();
    cy.get('[data-cy="user-choice"]').should("exist").should("have.text", "Paper");
    cy.get('[data-cy="computer-choice"]').should("exist");
    cy.get('[data-cy="result"]').should("exist");   
    cy.get('[data-cy="computer-choice"]').then(($compChoice) => {
      if ($compChoice.text().includes('Paper')) {cy.get('[data-cy="result"]').should("exist").should("have.text", "It's a Tie!");}
      else if ($compChoice.text().includes('Rock')) {cy.get('[data-cy="result"]').should("exist").should("have.text", "You Won!");}
      else {cy.get('[data-cy="result"]').should("exist").should("have.text", "You Lost!")}
  }) 
  })

  it('tests the scissors button', () => {
    cy.get('[data-cy="scissors-btn"]').should("exist").should("have.text", "Scissors");
    cy.get('[data-cy="scissors-btn"]').click();
    cy.get('[data-cy="user-choice"]').should("exist").should("have.text", "Scissors");
    cy.get('[data-cy="computer-choice"]').should("exist");
    cy.get('[data-cy="computer-choice"]').then(($compChoice) => {
      if ($compChoice.text().includes('Scissors')) {cy.get('[data-cy="result"]').should("exist").should("have.text", "It's a Tie!");}
      else if ($compChoice.text().includes('Paper')) {cy.get('[data-cy="result"]').should("exist").should("have.text", "You Won!");}
      else {cy.get('[data-cy="result"]').should("exist").should("have.text", "You Lost!")}
  })
    
  }) 

  }) 

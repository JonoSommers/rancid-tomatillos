// Mock data to use for testing:
import posters from '../fixtures/movie_posters.json'
// import details from '../fixtures/movie_details.json'

describe('Main Page', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
            statusCode: 200,
            fixture: 'movie_posters'
        })

        cy.visit('http://localhost:3000')
    })

    it('displays title on page load', () => {
        cy.get('h1').contains('Rancid Tomatillos')
    })

    it('displays movies on page load', () => {
        cy.get('.MoviesContainer > section').should('have.length', 4)
        cy.get('.MoviesContainer > section').first().find('img').should('be.visible')
        cy.get('.MoviesContainer > section').first().find('p').contains(posters[0].vote_count)
        cy.get('.MoviesContainer > section').first().find('p').get('button').contains('⬆️')
        cy.get('.MoviesContainer > section').last().find('img').should('be.visible')
        cy.get('.MoviesContainer > section').last().find('p').contains(posters[3].vote_count)
        cy.get('.MoviesContainer > section').last().find('p').get('button').contains('⬇️')
    })
})
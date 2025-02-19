import posters from '../fixtures/movie_posters.json'

describe('Voting', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
            statusCode: 200,
            fixture: 'movie_posters'
        })
    
        cy.visit('http://localhost:3000')
        
    })

    it('increases vote count by 1 when a user clicks ⬆️', () => {
        cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
            statusCode: 200,
            fixture: 'movie_voting_first_up'
        })

        cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/680', {
            statusCode: 200,
            fixture: 'movie_voting_last_up'
        })
        
        cy.get('.MoviesContainer > section').first().find('p').should('contain', posters[0].vote_count)
        cy.get('.MoviesContainer > section').first().contains('button', '⬆️').click()
        cy.get('.MoviesContainer > section').first().find('p').should('contain', (posters[0].vote_count + 1))
        cy.get('.MoviesContainer > section').last().find('p').should('contain', posters[3].vote_count)
        cy.get('.MoviesContainer > section').last().contains('button', '⬆️').click()
        cy.get('.MoviesContainer > section').last().find('p').should('contain', (posters[3].vote_count + 1))
    })

    it('decreases vote count by 1 when a user clicks ⬇️', () => {
        cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
            statusCode: 200,
            fixture: 'movie_voting_first_down'
        })

        cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/680', {
            statusCode: 200,
            fixture: 'movie_voting_last_down'
        })

        cy.get('.MoviesContainer > section').first().find('p').should('contain', posters[0].vote_count)
        cy.get('.MoviesContainer > section').first().contains('button', '⬇️').click()
        cy.get('.MoviesContainer > section').first().find('p').should('contain', (posters[0].vote_count - 1))
        cy.get('.MoviesContainer > section').last().find('p').should('contain', posters[3].vote_count)
        cy.get('.MoviesContainer > section').last().contains('button', '⬇️').click()
        cy.get('.MoviesContainer > section').last().find('p').should('contain', (posters[3].vote_count - 1))
    })
})
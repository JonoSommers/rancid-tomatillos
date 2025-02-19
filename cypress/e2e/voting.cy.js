describe('Voting', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
            statusCode: 200,
            fixture: 'movie_posters'
        })
    
        cy.visit('http://localhost:3000')
    })

    it('increases vote count by 1 when a user clicks ⬆️', () => {
        // check the first movies vote count
        // mock the click of the up-vote button
        // confirm the first movies vote count was increased by 1
        // do it all again for the last movie
    })

    it('decreases vote count by 1 when a user clicks ⬆️', () => {
        // check the first movies vote count
        // mock the click of the down-vote button
        // confirm the first movies vote count was decreased by 1
        // do it all again for the last movie
    })
})
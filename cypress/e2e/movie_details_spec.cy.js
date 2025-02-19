describe('movie details spec', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    })

    cy.visit('http://localhost:3000')
  })

  it('displays title and home icon on page load', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  })

  it('displays the first movie details', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: "the_dark_knight_movie_details"
    })
    cy.visit('http://localhost:3000/')

    cy.get('.MoviesContainer > section').first().click()
    cy.get('h1').contains('The Dark Knight')
    cy.get('.MovieDetails').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg')
    cy.get('.MovieDetails').find('img').should('have.attr', 'alt', 'The Dark Knight')
    cy.get('.genres').contains("Drama")
    cy.get('.genres').contains("Action")
    cy.get('.genres').contains("Crime")
    cy.get('.genres').contains("Thriller")
    cy.get('p').contains("Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.")
  })

  it('displays the last movie details', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/680', {
      statusCode: 200,
      fixture: "pulp_fiction_movie_details"
    })
    cy.visit('http://localhost:3000/')

    cy.get('.MoviesContainer > section').last().click()
    cy.get('h1').contains('Pulp Fiction')
    cy.get('.MovieDetails').find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg")
    cy.get('.MovieDetails').find('img').should('have.attr', 'alt', 'Pulp Fiction')
    cy.get('.genres').contains("Thriller")
    cy.get('.genres').contains("Crime")
    cy.get('p').contains("A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.")
  })

  it('displays home icon in the movie details page when clicking on a poster', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: "the_dark_knight_movie_details"
    })
    cy.visit('http://localhost:3000/')
    cy.get('.MoviesContainer > section').last().click()
    cy.get('.homeIcon').should('exist');
  })

  it('displays homepage when clicking on the home icon', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: "the_dark_knight_movie_details"
    })
    cy.visit('http://localhost:3000/')
    cy.get('.MoviesContainer > section').last().click()
    cy.get('.homeIcon').should('exist');
    cy.get('.homeIcon').click()

    cy.get('.MoviesContainer > section').should('have.length', 4)
  })
})